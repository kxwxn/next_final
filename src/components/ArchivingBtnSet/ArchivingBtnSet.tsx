import styles from "./ArchivingBtnSet.module.css";
import { auth } from "@clerk/nextjs";
import { connectDB } from "@/db/connectDB";
import { Timestamp } from "mongodb";
import { redirect } from "next/navigation";
export default function ArchivingBtnSet(props) {
  const { collectionName, redirectUrl } = props;
  console.log(collectionName, redirectUrl);
  async function handleDraft(formData) {
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
          createdAt: new Timestamp(),
        },
      },

      { upsert: true },
    );
  }

  async function handleDelete(formData) {
    "use server";
    const { userId } = auth();
    const db = (await connectDB).db("n0wlk");
    db.collection(`${collectionName}`).deleteOne({ author: userId });
    redirect(`{/${redirectUrl}}`);
  }

  return (
    <div className={styles.buttonsContianer}>
      <button className={styles.btnDelete} formAction={handleDelete}>
        <span>Click!</span>
        <span>Delete</span>
      </button>
      <button className={styles.btnDraft} formAction={handleDraft}>
        <span>Saved!</span>
        <span>Click!</span>
        <span>Save as Draft</span>
      </button>
      <button className={styles.btnArchive} type="submit">
        <span>Click!</span>
        <span>Publish</span>
      </button>
    </div>
  );
}

// ArchivingBtnSet을 사용하는 컴포넌트에서 새로고침을 하면 Delete와 Save as Draft 버튼이 렌더링이 이상하게 되고 작동이 된지 않는다.
