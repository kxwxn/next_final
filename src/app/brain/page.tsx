import styles from "./brain.module.css";
import ThreeDCardForm from "@/components/ThreeDCardForm/page";
import connectDB from "@/db/connectDB";

export default async function Brain() {
  const db = (await connectDB).db("n0wlk");
  const result = await db
    .collection("brainPost")
    .find()
    .sort({ _id: -1 })
    .toArray();

  return (
    <div className={styles.container}>
      <ThreeDCardForm result={result} />
    </div>
  );
}

// 여기서 db에 있는 블로그를 보여준다.
// 1. 랜딩페이지는 3Dcard를 이용하여 보여준다. 제목과 블로그의 첫번째줄.
// 2. tanstack-query를 이용해 무한 스크롤로 데이터 fetching
// 3. 각각의 카드를 클릭시 상페페이지[id]로 들어간다.
