import { getXataClient } from "@/xata";

export default async function Soul() {
  const xataClient = getXataClient();
  const users = await xataClient.db.users.getMany();
  const user = users.map((item, index: number) => {
    return (
      <div key={index}>
        <h1>{item.name}</h1>
      </div>
    );
  });
  return <div>{user}</div>;
}
