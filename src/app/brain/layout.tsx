import ArchivingBtn from "@/components/ArchivingBtn/ArchivingBtn";
import styles from "./brainLayout.module.css";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <ArchivingBtn />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
