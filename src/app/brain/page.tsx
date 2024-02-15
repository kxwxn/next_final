import styles from "./brain.module.css";
import connectDB from "@/db/connectDB";
import Link from "next/link";
import moment from "moment";
import { Permanent_Marker } from "next/font/google";
import Image from "next/image";

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});

export default async function Brain() {
  const db = (await connectDB).db("n0wlk");
  const result = await db
    .collection("brainPost")
    .find()
    .sort({ _id: -1 })
    .toArray();
  const displayBrainPosts = result.map((item, index) => {
    const timeStamp = new Date(item.createdAt.getHighBits() * 1000);
    const relativeTime = moment(timeStamp).fromNow();
    const time = timeStamp.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return (
      <h1 key={index} className={styles.frame}>
        <div className={styles.authorInfo}>
          <Image
            className={styles.imageFrame}
            src={item.profilePicture}
            alt="profile picture"
            width={30}
            height={30}
          />
          <span className={styles.name}>{item.name}</span>
        </div>
        <Link href={"/brain/" + item._id} className={styles.link}>
          {item.title}
        </Link>
        <span className={styles.time}>
          <span>{relativeTime}</span>
          {","} <span>{time}</span>
        </span>
      </h1>
    );
  });

  return (
    <div className={`${styles.container} ${permanentMarker.className}`}>
      <h1 className={styles.header}>STORIES from brain </h1>
      <div className={styles.postsContainer}>{displayBrainPosts}</div>
    </div>
  );
}

// 여기서 db에 있는 블로그를 보여준다.
// 1. 랜딩페이지는 3Dcard를 이용하여 보여준다. 제목과 블로그의 첫번째줄.
// 2. tanstack-query를 이용해 무한 스크롤로 데이터 fetching
// 3. 각각의 카드를 클릭시 상페페이지[id]로 들어간다.
