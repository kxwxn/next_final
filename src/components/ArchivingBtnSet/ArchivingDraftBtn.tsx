import styles from "./ArchivingDraftBtn.module.css";
import { auth } from "@clerk/nextjs";
import connectDB from "@/db/connectDB";
import { Timestamp } from "mongodb";

interface propsType {
  collectionName: string;
  redirectUrl: string;
}

export default async function ArchivingDraftBtn(props: propsType) {
  console.log("draftBtn", props);
  const { collectionName, redirectUrl } = props;

  async function handleDraft(formData: any) {
    "use server";
    const { userId } = auth();
    const db = (await connectDB).db("n0wlk");
    db.collection(`${collectionName}`).updateOne(
      { author: userId },
      {
        $set: {
          title: formData.get("title"),
          spotifyUrl: formData.get("spotifyUrl"),
          content: formData.get("content"),
          author: userId,
          // @ts-ignore
          createdAt: new Timestamp(),
        },
      },
      { upsert: true },
    );
  }

  return (
    <form action={handleDraft}>
      <button className={styles.btnDraft} type="submit">
        <span>Saved!</span>
        <span>Click!</span>
        <span>Save as Draft</span>
      </button>
    </form>
  );
}
