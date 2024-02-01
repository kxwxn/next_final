// import {connectDB} from "@/db/connnectDB"
import styles from "./ArchivingForm.module.css";

export default function ArchivingForm() {
  //   async function handleSubmit(formData) {
  //     "use server";
  //     const db = (await connectDB).db("n0wlk");
  //     db.collection('brainPost').insertOne({title:formData.get('title')})
  //   }
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
          <button className={styles.btnDelete} type="button">
            <span>Click!</span>
            <span>Delete</span>
          </button>
          <button className={styles.btnDraft} type="button">
            <span>Click!</span>
            <span>Draft</span>
          </button>
          <button className={styles.btnArchive} type="submit">
            <span>Click!</span>
            <span>Archive</span>
          </button>
        </div>
      </form>
    </div>
  );
}

// Draft 버튼을 구현 후 Delete 버튼을 구현한다.
