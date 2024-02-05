"use client";
import Image from "next/image";
import styles from "@/components/SpotifyBtnSet/SpotifyBtnSet.module.css";
import { earDelete } from "@/components/EarDeleteBtn/earDelete";

export default function EarDeleteBtn({ slugId }) {
  const onSubmit = (event, formData: FormData) => {
    if (confirm("Are you sure?")) {
      earDelete(formData);
    } else {
      event.preventDefault();
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      action={"/api/ear/delete"}
      method="POST"
      className={styles.delete}
    >
      <input type="hidden" name="slugId" value={slugId} />
      <button type="submit">
        <Image
          src={process.env.DELETING_IMAGES || "/icons/deleting.png"}
          srcSet={
            process.env.EDITING_IMAGES
              ? undefined
              : "/icons/deleting.png 1x, /icons/deleting.png 2x"
          }
          width={20}
          height={20}
          alt={"an image for deleting icon"}
        />
      </button>
    </form>
  );
}
