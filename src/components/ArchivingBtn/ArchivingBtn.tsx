import Link from "next/link";
import styles from "./ArchivingBtn.module.css";

export default function ArchivingBtn(props) {
  return (
    <div>
      <Link
        href={`/${props.prop}/archiving`}
        className={`${styles.customBtn} ${styles.btn12}`}
      >
        <span>click!</span>
        <span>archiving</span>
      </Link>
    </div>
  );
}
