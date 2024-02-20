import styles from "./SlugEditBtn.module.css";
import Link from "next/link";

interface paramsType {
  params: {
    brainSlug: string;
  };
}
export default function SlugEditBtn({ params }: paramsType) {
  const { brainSlug } = params;
  return (
    <div className={styles.container}>
      <Link
        href={`/brain/${brainSlug}/edit`}
        className={styles.btnEdit}
        passHref={true}
      >
        Edit
      </Link>
    </div>
  );
}
