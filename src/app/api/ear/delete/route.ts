import { connectDB } from "@/db/connectDB";
import { redirect } from "next/navigation";
import { ObjectId } from "bson";

export async function POST(request: Request) {
  let shouldRedirect = false;

  try {
    const formData = await request.formData();
    const id = formData.get("slugId");
    const db = (await connectDB).db("n0wlk");
    db.collection("ear").deleteOne({
      _id: new ObjectId(id),
    });
    shouldRedirect = true;
  } catch (err) {
    console.error(err);
    return;
  }
  if (shouldRedirect) {
    redirect("/ear");
  }
}
