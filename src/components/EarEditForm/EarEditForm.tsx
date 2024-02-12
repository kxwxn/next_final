import styles from "./EarEditForm.module.css";
import connectDB from "@/db/connectDB";
import { ObjectId } from "bson";
import ArchivingBtnSet from "@/components/ArchivingBtnSet/ArchivingBtnSet";
import { auth } from "@clerk/nextjs";
import { Timestamp } from "mongodb";
import { redirect } from "next/navigation";
export default async function EarEditForm({ slugId }: { slugId: number }) {
  const db = (await connectDB).db("n0wlk");
  const slug: any = await db
    .collection("ear")
    .findOne({ _id: new ObjectId(slugId) });

  const handleSubmit = async (formData: FormData) => {
    "use server";
    let shouldRedirect = false;

    try {
      const { userId } = auth();
      const db = (await connectDB).db("n0wlk");
      db.collection("ear").updateOne(
        { _id: new ObjectId(slugId) },
        {
          $set: {
            author: userId,
            spotifyUrl: formData.get("spotifyUrl"),
            content: formData.get("content"),
          },
        },
      );
      shouldRedirect = true;
    } catch (e) {
      console.error(e);
      return;
    }
    if (shouldRedirect) {
      redirect("/ear");
    }
  };

  const collection = {
    collectionName: "earDraft",
    redirectUrl: "ear",
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
          placeholder="spotify url"
          defaultValue={slug.spotifyUrl}
          className={styles.url}
          required
        />
        <textarea
          name="content"
          placeholder="How are you feeling?"
          defaultValue={slug.content}
          className={styles.content}
          required
        />
      </form>
    </div>
  );
}

// dynamic route 에 맞는 데이터를 가져온다.
// 가져온 데이터를 textarea 에 보여준다.
