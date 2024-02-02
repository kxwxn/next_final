import styles from "./SlugEditBtn.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SlugEditBtn({ params }) {
  console.log(params);
  return (
    <>
      <Link href={`/brain/${params.brainSlug}/edit`} className={styles.btnEdit}>
        <span>Click!</span>
        <span>Edit</span>
      </Link>
    </>
  );
}

// Dynamic Route 를 Link태그를 이용해 라우팅하는법.
