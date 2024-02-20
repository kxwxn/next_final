import styles from "./SlugDeleteBtn.module.css";
import { ObjectId } from "bson";
import { auth } from "@clerk/nextjs";
import connectDB from "@/db/connectDB";
import { redirect } from "next/navigation";

interface paramsType {
  params: {
    brainSlug: string;
  };
}
export default async function SlugDeleteBtn({ params }: paramsType) {
  const slugId = params.brainSlug;
  const db = (await connectDB).db("n0wlk");
  const slug = await db
    .collection("brainPost")
    .findOne({ _id: new ObjectId(slugId) });
  const { userId: authId } = auth();
  const userInfo = slug?.author;

  async function deleteSlug() {
    "use server";
    const slugId = params.brainSlug;
    const db = (await connectDB).db("n0wlk");
    const slug = await db
      .collection("brainPost")
      .deleteOne({ _id: new ObjectId(slugId) });
    redirect("/brain");
  }

  return (
    <>
      {authId === userInfo && (
        <div className={styles.container}>
          <form action={deleteSlug}>
            <button className={styles.btnDelete} type="submit">
              Delete
            </button>
          </form>
        </div>
      )}
    </>
  );
}

// Delete 버튼이 현재 구현 됬는데, userId 로 삭제를한다. 이러면 안된다, 이 유저가 작성한 모든 글들이 삭제되기때문에,
// 글의 _id를 찾아서 삭제 시켜야한다

// 현재는 slug 의 _id 를 찾아서 잘 삭제가 된다.
