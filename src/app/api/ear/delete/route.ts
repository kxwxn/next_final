import { connectDB } from "@/db/connectDB";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  let shouldRedirect = false;
  try {
    const formData = await request.formData();
    const id = await request.formData("slugId");
    const db = (await connectDB).db("n0wlk");
    db.collection("ear").deleteOne({
      _id: id,
    });
    shouldRedirect = true;
  } catch (err) {
    console.error(err);
    return;
  }
  if (shouldRedirect) {
    revalidatePath("/ear");
  }
}
