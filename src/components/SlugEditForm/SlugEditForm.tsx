import styles from "./SlugEditForm.module.css";
import { connectDB } from "@/db/connectDB";
import { auth } from "@clerk/nextjs";
import { Timestamp } from "mongodb";
import { ObjectId } from "bson";
import { redirect } from "next/navigation";
export default function SlugEditForm(params) {
  console.log(params);
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
      </form>
    </div>
  );
}

// dynamic route 에 맞는 데이터를 가져온다.
// 가져온 데이터를 textarea 에 보여준다.
