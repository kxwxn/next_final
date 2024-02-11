import styles from "./ArchivingForm.module.css";
import { connectDB } from "@/db/connectDB";
import { auth } from "@clerk/nextjs";
import { Timestamp } from "mongodb";
import { ObjectId } from "bson";
import { redirect } from "next/navigation";
import ArchivingBtnSet from "@/components/ArchivingBtnSet/ArchivingBtnSet";

export default function ArchivingForm() {
  async function handleDraft(formData) {
    "use server";
    const { userId } = auth();
    const db = (await connectDB).db("n0wlk");
    db.collection("brainDraft").updateOne(
      { author: userId },

      {
        $set: {
          title: formData.get("title"),
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
    db.collection("brainDraft").deleteOne({ author: userId });
    redirect("/brain");
  }
  const collection = {
    collectionName: "brainDraft",
    redirectUrl: "brain",
  };

  return (
    <div className={styles.container}>
      <form
        action={"/api/brain/archiving"}
        method="POST"
        className={styles.formContainer}
      >
        <textarea
          name="title"
          className={styles.title}
          placeholder="Title..."
          required
        />
        <textarea
          name="content"
          placeholder="Thoughts..."
          className={styles.content}
          required
        />
        <ArchivingBtnSet {...collection} />
      </form>
    </div>
  );
}

// contentEditable 을 사용하여 이미지파일을 업로드할수 있는 기능 차후에 추가.
