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
    <>
      <Link
        href={`/brain/${brainSlug}/edit`}
        className={styles.btnEdit}
        passHref={true}
      >
        <span>Click!</span>
        <span>Edit</span>
      </Link>
    </>
  );
}

// useParams 를 이용하여 dynamic route의 url 을 가져온다.
// Dynamic Route 를 Link태그를 이용해 라우팅하는법.
