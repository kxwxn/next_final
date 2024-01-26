import { connectDB } from "@/db/connectDB";
import Link from "next/link";

const ThreeDCardForm = async () => {
  const db = (await connectDB).db("n0wlk");
  let result = await db.collection("brainPost").find().toArray();

  const cardRendering = result.map((item, index: number) => (
    <div key={index}>
      <Link href={"/brain/" + item._id}>{item.title}</Link>
    </div>
  ));
  return <div>{cardRendering}</div>;
};

export default ThreeDCardForm;
