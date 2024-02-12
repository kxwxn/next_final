import styles from "./SlugEditForm.module.css";
import connectDB from "@/db/connectDB";
import { ObjectId } from "bson";
import ArchivingBtnSet from "@/components/ArchivingBtnSet/ArchivingBtnSet";
import { WithId } from "mongodb";

interface ParamsType {
  brainSlug: string;
}

interface SlugType {
  title: string;
  content: string;
}
export default async function SlugEditForm(params: ParamsType) {
  const slugId = params.brainSlug;
  const db = (await connectDB).db("n0wlk");
  const slug: WithId<any> | null = await db
    .collection("brainPost")
    .findOne({ _id: new ObjectId(slugId) });

  const collection = {
    collectionName: "brainDraft",
    redirectUrl: "brain",
  };

  return (
    <div className={styles.container}>
      <form
        action={"/api/brain/edit"}
        method="POST"
        className={styles.formContainer}
      >
        <input type="hidden" value={slugId} name="editId" />
        <textarea
          name="title"
          className={styles.title}
          placeholder="Title..."
          defaultValue={slug.title}
          required
        />
        <textarea
          name="content"
          placeholder="Thoughts..."
          className={styles.content}
          defaultValue={slug.content}
          required
        />
        <ArchivingBtnSet {...collection} />
      </form>
    </div>
  );
}

// dynamic route 에 맞는 데이터를 가져온다.
// 가져온 데이터를 textarea 에 보여준다.
