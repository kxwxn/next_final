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

// Draft 버튼을 구현 후 Delete 버튼을 구현한다.

// Draft는 기본적으로 유저마다 하나씩만 가질수 있다.
// 글이 save로 인해 발행이 된다면, Draft도 삭제해야 한다.

// Draft 와 Delete 버튼들의 작동후 사용자에게 알림을 표시해야한다. CSS
// Delete는 redirect로 사용자가 변화를 감지하는 경험을 하게 했다.
// Draft는
