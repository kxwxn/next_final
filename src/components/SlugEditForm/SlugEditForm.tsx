import styles from "./SlugEditForm.module.css";
import { connectDB } from "@/db/connectDB";
import { ObjectId } from "bson";
import ArchivingBtnSet from "@/components/ArchivingBtnSet/ArchivingBtnSet";
export default async function SlugEditForm(params) {
  const slugId = params.brainSlug;
  const db = (await connectDB).db("n0wlk");
  const slug = await db
    .collection("brainPost")
    .findOne({ _id: new ObjectId(slugId) });

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
          defaultValue={slug.title}
        />
        <textarea
          name="content"
          placeholder="Thoughts..."
          className={styles.content}
          required
          defaultValue={slug.content}
        />
        <ArchivingBtnSet {...collection} />
      </form>
    </div>
  );
}

// dynamic route 에 맞는 데이터를 가져온다.
// 가져온 데이터를 textarea 에 보여준다.
