"use client";
import Image from "next/image";
import styles from "./EarDeleteBtn.module.css";
import React from "react";
export default function EarDeleteBtn({ slugId }: { slugId: number }) {
  const onSubmit = (
    event: React.FormEvent<HTMLInputElement>,
    formData: FormData,
  ) => {
    if (confirm("Are you sure?")) {
      return true;
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
      <button type="submit" className={styles.btn}>
        <Image
          src={process.env.DELETING_IMAGES || "/icons/deleting.png"}
          width={20}
          height={20}
          alt={"an image for deleting icon"}
        />
      </button>
    </form>
  );
}
