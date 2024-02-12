import styles from "./SpotifyPostForm.module.css";
import connectDB from "@/db/connectDB";
import { auth } from "@clerk/nextjs";
import { Timestamp } from "mongodb";
import ArchivingBtnSet from "@/components/ArchivingBtnSet/ArchivingBtnSet";
import { redirect } from "next/navigation";

export default async function SpotifyPostForm() {
  const collection = {
    collectionName: "earDraft",
    redirectUrl: "ear",
  };

  const handleSubmit = async (formData: FormData) => {
    "use server";
    let shouldRedirect = false;

    try {
      const { userId } = auth();
      const db = (await connectDB).db("n0wlk");
      db.collection("ear").insertOne({
        author: userId,
        spotifyUrl: formData.get("spotifyUrl"),
        content: formData.get("content"),
        //@ts-ignore
        createdAt: new Timestamp(),
      });
      shouldRedirect = true;
    } catch (e) {
      console.error(e);
      return;
    }
    if (shouldRedirect) {
      redirect("/ear");
    }
  };

  return (
    <div className={styles.container}>
      <form
        action={handleSubmit}
        method="POST"
        className={styles.formContainer}
      >
        <ArchivingBtnSet {...collection} />
        <input
          name="spotifyUrl"
          placeholder="PASTE A SPOTIFY URL"
          required
          className={styles.url}
        />
        <textarea
          name="content"
          placeholder="How are you feeling?"
          className={styles.content}
          required
        />
      </form>
    </div>
  );
}
