import { connectDB } from "@/db/connectDB";
import { ObjectId } from "bson";
import styles from "./BrainSlug.module.css";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function BrainSlug({ params }) {
  const slugId = params.brainSlug;
  const db = (await connectDB).db("n0wlk");
  const slug = await db
    .collection("brainPost")
    .findOne({ _id: new ObjectId(slugId) });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{slug.title}</h1>
      <MDXRemote source={slug.content} />
      {/*<pre className={styles.content}>{slug.content}</pre>*/}
    </div>
  );
}

// Here is the page to display each of brain slugs.
// It has to be rendered as Markdown.
