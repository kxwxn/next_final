// import {connectDB} from "@/db/connnectDB"
import styles from "./ArchivingForm.module.css";

const ArchivingForm = () => {
  // async function handleSubmit(formData) {
  //   "use server";
  //   const db = (await connectDB).db("n0wlk");
  //   db.collection('brainPost').insertOne({title:formData.get('title')})
  // }
  return (
    <div>
      <span>user info?</span>
      <form
        action={"/api/brain/archiving"}
        method="POST"
        className={styles.container}
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
          <button type="button">Cancel</button>
          <button type="button">Save</button>
          <button type="submit">Archive</button>
        </div>
      </form>
    </div>
  );
};

export default ArchivingForm;

// brain 블로그에 글을 쓰는 페이지.
// 1. 사용자의 입력을 받아서 db에 post 한다.
// 2. Markdown 형식의 에디터를 사용해서 입력을 받는다.
// 3. MongoDB 연결
// 4. next fetch 를 이용하여 MongoDB에 post
// 5. post 후에 /brain 경로로 리다이렉트
