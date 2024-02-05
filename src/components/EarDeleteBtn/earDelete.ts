"use server";
import { connectDB } from "@/db/connectDB";
import { ObjectId } from "bson";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const earDelete = async (props: FormData) => {
  const id = props.get("name");
  console.log("ididid", id);
  try {
    const db = (await connectDB()).db("n0wlk");
    const slug = await db
      .collection("ear")
      .deleteOne({ _id: new ObjectId(id) });
    redirect("/ear");
  } catch (e) {
    console.error(e);
    console.log("an error occured", e);
  }
  revalidatePath("/ear");
};
