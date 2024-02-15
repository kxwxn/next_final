import connectDB from "@/db/connectDB";
import { redirect } from "next/navigation";
import { Timestamp } from "mongodb";
import { auth, currentUser } from "@clerk/nextjs";

export async function POST(request: Request) {
  const { userId } = auth();
  const user = await currentUser();
  const name = user?.firstName + " " + user?.lastName;
  const profilePicUrl = user?.imageUrl;
  let shouldRedirect = false;
  try {
    const formData = await request.formData();
    const title = formData.get("title");
    const content = formData.get("content");
    const author = formData.get("author");
    const db = (await connectDB).db("n0wlk");
    db.collection("brainPost").insertOne({
      author: userId,
      name: name,
      profilePicture: profilePicUrl,
      title: title,
      content: content,
      // @ts-ignore
      createdAt: new Timestamp(),
    });
    db.collection("brainDraft").deleteOne({ author: userId });
    shouldRedirect = true;
  } catch (err) {
    console.error(err);
    return;
  }
  if (shouldRedirect) {
    redirect("/brain");
  }
}

// author는 clerk 의 auth 인스턴스로 userId 값을 가져와서 할당.
// createdAt 설정.
// 글이 발행후에는 Draft도 함께 삭제한다.
