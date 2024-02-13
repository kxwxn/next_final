import styles from "./ArchivingDeleteBtn.module.css";
import { ObjectId } from "bson";
import { auth } from "@clerk/nextjs";
import connectDB from "@/db/connectDB";

interface propsType {
  collectionName: string;
  redirectUrl: string;
}

export default async function ArchivingDeleteBtn(props: propsType) {
  console.log("deleteBtn", props);

  const { collectionName, redirectUrl } = props;

  async function handleDelete(formData: any) {
    "use server";
    const { userId } = auth();
    const db = (await connectDB).db("n0wlk");
    db.collection(`${collectionName}`).deleteOne({ author: userId });
  }

  return (
    <form action={handleDelete}>
      <button className={styles.btnDelete} type="submit">
        <span>Click!</span>
        <span>Delete</span>
      </button>
    </form>
  );
}
