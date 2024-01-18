import { redirect } from "next/navigation";

const page = (): void => {
  return redirect("/i/flow/signin");
};

export default page;
