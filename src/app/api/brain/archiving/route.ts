import { connectDB } from "@/db/connectDB";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
  console.log("I'm here!", request.formData);

  let shouldRedirect = false;
  try {
    const formData = await request.formData();
    const title = formData.get("title");
    const content = formData.get("content");
    const db = (await connectDB).db("n0wlk");
    db.collection("brainPost").insertOne({ title: title, content: content });
    shouldRedirect = true;
  } catch (err) {
    console.error(err);
    return;
  }
  if (shouldRedirect) {
    redirect("/brain");
  }
}
