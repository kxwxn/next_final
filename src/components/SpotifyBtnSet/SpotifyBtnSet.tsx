import Image from "next/image";
import styles from "./SpotifyBtnSet.module.css";
import Link from "next/link";
import EarDeleteBtn from "@/components/EarDeleteBtn/EarDeleteBtn";

export default function SpotifyBtnSet({ slugId }: { slugId: number }) {
  return (
    <div className={styles.container}>
      <Link href={`ear/${slugId}/edit`} legacyBehavior>
        <a className={styles.link}>
          <Image
            src={process.env.EDITING_IMAGES || "/icons/editing.png"}
            width={20}
            height={20}
            alt={"an image for editing icon"}
          />
        </a>
      </Link>
      <EarDeleteBtn slugId={slugId} />
    </div>
  );
}
