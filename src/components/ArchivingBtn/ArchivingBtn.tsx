import Link from "next/link";
import styles from "./ArchivingBtn.module.css";

export default function ArchivingBtn() {
  return (
    <div>
      <Link
        href="/brain/archiving"
        className={`${styles.customBtn} ${styles.btn12}`}
      >
        <span>click!</span>
        <span>archiving</span>
      </Link>
    </div>
  );
}
