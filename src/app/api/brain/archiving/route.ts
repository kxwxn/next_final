import { connectDB } from "@/db/connectDB";
import { redirect } from "next/navigation";
import { Timestamp } from "mongodb";
import { auth } from "@clerk/nextjs";

export async function POST(request: Request) {
  console.log("I'm here!", request.formData);
  const { userId } = auth();
  console.log("userId", userId);
  let shouldRedirect = false;
  try {
    const formData = await request.formData();
    const title = formData.get("title");
    const content = formData.get("content");
    const author = formData.get("author");
    const db = (await connectDB).db("n0wlk");
    db.collection("brainPost").insertOne({
      author: userId,
      title: title,
      content: content,
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
