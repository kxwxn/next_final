import styles from "./earLayout.module.css";
import ArchivingBtn from "@/components/ArchivingBtn/ArchivingBtn";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <ArchivingBtn prop="ear" />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
