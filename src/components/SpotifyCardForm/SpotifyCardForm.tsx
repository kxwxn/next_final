import styles from "./SpotifyCardForm.module.css";
import { Spotify } from "react-spotify-embed";
import connectDB from "@/db/connectDB";
import SpotifyBtnSet from "@/components/SpotifyBtnSet/SpotifyBtnSet";
import { auth, currentUser } from "@clerk/nextjs";
import moment from "moment";
import { WithId } from "mongodb";

export default async function SpotifyCardForm() {
  const curUser = await currentUser();
  const user = auth().userId;
  const db = (await connectDB).db("n0wlk");
  let result = await db.collection("ear").find().sort({ _id: -1 }).toArray();
  result = result.map((a: WithId<any>) => {
    a._id = a._id.toString();
    return a;
  });

  const DisplaySpotifyCards = result.map((item: WithId<any>, index: number) => {
    const user = auth().userId;
    const match = user === item.author;
    const timeStamp = new Date(item.createdAt.getHighBits() * 1000);
    const relativeTime = moment(timeStamp).fromNow();
    const time = timeStamp.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    return (
      <div key={index} className={styles.frame}>
        <Spotify link={item.spotifyUrl} className={styles.spotify} />
        <div className={styles.date}>
          <div>{relativeTime}</div>
          <div>{time}</div>
        </div>
        <div className={styles.content}>{item.content}</div>
        {match && <SpotifyBtnSet slugId={item._id} />}
      </div>
    );
  });

  return <div className={styles.container}>{DisplaySpotifyCards}</div>;
}
