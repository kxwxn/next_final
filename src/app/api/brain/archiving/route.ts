import { connectDB } from "@/util/db";

export async function POST(request: Request) {
  const formData = await request.formData();
  const title = formData.get("title");
  const content = formData.get("content");
  const db = (await connectDB).db("n0wlk");
  db.collection("brainPost").insertOne({ title: title, content: content });
  return Response.redirect("/brain", 302);
}
