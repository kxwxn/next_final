import Link from "next/link";
import styles from "./ArchivingBtn.module.css";
interface BtnProps {
  prop: string;
}

export default function ArchivingBtn(props: BtnProps) {
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
