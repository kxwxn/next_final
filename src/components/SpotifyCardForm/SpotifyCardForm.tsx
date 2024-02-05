import styles from "./SpotifyCardForm.module.css";
import { Spotify } from "react-spotify-embed";
import { connectDB } from "@/db/connectDB";
import Image from "next/image";
import SpotifyBtnSet from "@/components/SpotifyBtnSet/SpotifyBtnSet";
import { auth } from "@clerk/nextjs";

export default async function SpotifyCardForm() {
  const user = auth().userId;
  const db = (await connectDB).db("n0wlk");
  const result = await db.collection("ear").find().sort({ _id: -1 }).toArray();

  const DisplaySpotifyCards = result.map((item, index) => {
    const user = auth().userId;
    const match = user === item.author;

    return (
      <div key={index} className={styles.frame}>
        {match && <SpotifyBtnSet slugId={item._id} />}
        <Spotify link={item.spotifyUrl} />
        <div>{item.content}</div>
      </div>
    );
  });

  return <div className={styles.container}>{DisplaySpotifyCards}</div>;
}
