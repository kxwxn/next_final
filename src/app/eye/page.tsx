"use client";
import React from "react";
import styles from "./eye.module.css";
import { handleClick } from "./onClick";

const Eye = () => {
  const source = [
    "/images/TOKYO1.JPEG",
    "/images/TOKYO2.JPEG",
    "/images/TOKYO3.JPEG",
    "/images/TOKYO4.JPEG",
    "/images/TOKYO5.JPEG",
    "/images/TOKYO6.JPEG",
    "/images/TOKYO7.JPEG",
    "/images/TOKYO8.JPEG",
    "/images/TOKYO9.JPEG",
    "/images/TOKYO10.JPEG",
    "/images/TOKYO11.JPEG",
    "/images/TOKYO12.JPEG",
    "/images/TOKYO13.JPEG",
    "/images/TOKYO14.JPEG",
    "/images/TOKYO15.JPEG",
    "/images/TOKYO16.JPEG",
    "/images/TOKYO17.JPEG",
    "/images/TOKYO18.JPEG",
    "/images/TOKYO19.JPEG",
    "/images/TOKYO20.JPEG",
    "/images/TOKYO21.JPEG",
    "/images/TOKYO22.JPEG",
    "/images/TOKYO23.JPEG",
    "/images/TOKYO24.JPEG",
    "/images/TOKYO25.JPEG",
    "/images/TOKYO26.JPEG",
    "/images/TOKYO27.JPEG",
    "/images/TOKYO28.JPEG",
    "/images/TOKYO29.JPEG",
    "/images/TOKYO30.JPEG",
    "/images/TOKYO31.JPEG",
    "/images/TOKYO32.JPEG",
    "/images/TOKYO33.JPEG",
    "/images/TOKYO34.JPEG",
    "/images/TOKYO35.JPEG",
    "/images/TOKYO36.JPEG",
    "/images/TOKYO37.JPEG",
    "/images/TOKYO38.JPEG",
    "/images/TOKYO39.JPEG",
  ];
  const pictureRender = source.map((item, index) => (
    <div key={index} className={styles.frame}>
      <img
        src={item}
        alt=""
        className={styles.picture}
        onClick={() => handleClick(item)}
      />
    </div>
  ));

  return <div className={styles.container}>{pictureRender}</div>;
};

export default Eye;
