import Image from "next/image";
import styles from "./SpotifyBtnSet.module.css";
import Link from "next/link";
import EarDeleteBtn from "@/components/EarDeleteBtn/EarDeleteBtn";

export default function SpotifyBtnSet({ slugId }) {
  return (
    <div className={styles.container}>
      <Link href={`ear/${slugId}/edit`}>
        <Image
          src={process.env.EDITING_IMAGES || "/icons/editing.png"}
          srcSet={
            process.env.EDITING_IMAGES
              ? undefined
              : "/icons/editing.png 1x, /icons/editing.png"
          }
          width={20}
          height={20}
          alt={"an image for editing icon"}
        />
      </Link>
      <EarDeleteBtn slugId={slugId} />
    </div>
  );
}
