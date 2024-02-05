import { connectDB } from "@/db/connectDB";
import { ObjectId } from "bson";
import styles from "./BrainSlug.module.css";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import SlugDeleteBtn from "@/components/SlugDeleteBtn/SlugDeleteBtn";
import SlugEditBtn from "@/components/SlugEditBtn/SlugEditBtn";

export default async function BrainSlug({ params }) {
  const slugId = params.brainSlug;
  const db = (await connectDB).db("n0wlk");
  const slug = await db
    .collection("brainPost")
    .findOne({ _id: new ObjectId(slugId) });
  const { userId: authId } = auth();
  const userInfo = slug.author;

  return (
    <div className={styles.container}>
      {authId === userInfo && (
        <div>
          <SlugEditBtn params={params} />
          <SlugDeleteBtn params={params} />
        </div>
      )}
      <Link href={"/brain"} className={styles.btnArchive}>
        <span>Click!</span>
        <span>Archive</span>
      </Link>
      <h1 className={styles.title}>{slug.title}</h1>
      <div className={styles.slugContent}>
        <MDXRemote source={slug.content} />
      </div>
    </div>
  );
}

// Here is the page to display each of brain slugs.
// It has to be rendered as Markdown.
