import SoulPage from "@/components/SoulPage/SoulPage";
import styles from "./soul.module.css";

export default async function Soul() {
  return (
    <div className={styles.container}>
      <SoulPage />
    </div>
  );
}
// import { getXataClient } from "@/xata";

// *XATA DB*
// const xataClient = getXataClient();
// const users = await xataClient.db.users.getMany();
// const user = users.map((item, index: number) => {
//   return (
//     <div key={index}>
//       <h1>{item.name}</h1>
//     </div>
//   );
// });
