"use client";
import Image from "next/image";
import styles from "./eye.module.css";
import { handleClick } from "./onClick";

export default function Eye() {
  const source = [
    "/images/TOKYO1.jpeg",
    "/images/TOKYO2.jpeg",
    "/images/TOKYO3.jpeg",
    "/images/TOKYO4.jpeg",
    "/images/TOKYO5.jpeg",
    "/images/TOKYO6.jpeg",
    "/images/TOKYO7.jpeg",
    "/images/TOKYO8.jpeg",
    "/images/TOKYO9.jpeg",
    "/images/TOKYO10.jpeg",
    "/images/TOKYO11.jpeg",
    "/images/TOKYO12.jpeg",
    "/images/TOKYO13.jpeg",
    "/images/TOKYO14.jpeg",
    "/images/TOKYO15.jpeg",
    "/images/TOKYO16.jpeg",
    "/images/TOKYO17.jpeg",
    "/images/TOKYO18.jpeg",
    "/images/TOKYO19.jpeg",
    "/images/TOKYO20.jpeg",
    "/images/TOKYO21.jpeg",
    "/images/TOKYO22.jpeg",
    "/images/TOKYO23.jpeg",
    "/images/TOKYO24.jpeg",
    "/images/TOKYO25.jpeg",
    "/images/TOKYO26.jpeg",
    "/images/TOKYO27.jpeg",
    "/images/TOKYO28.jpeg",
    "/images/TOKYO29.jpeg",
    "/images/TOKYO30.jpeg",
    "/images/TOKYO31.jpeg",
    "/images/TOKYO32.jpeg",
    "/images/TOKYO33.jpeg",
    "/images/TOKYO34.jpeg",
    "/images/TOKYO35.jpeg",
    "/images/TOKYO36.jpeg",
    "/images/TOKYO37.jpeg",
    "/images/TOKYO38.jpeg",
    "/images/TOKYO39.jpeg",
  ];

  const pictureRender = source.map((item, index) => (
    <div key={index} className={styles.frame} onClick={() => handleClick(item)}>
      <Image
        src={item}
        alt="pictures of tokyo"
        layout="intrinsic"
        width={280}
        height={280}
      />
    </div>
  ));

  return <div className={styles.container}>{pictureRender}</div>;
}
