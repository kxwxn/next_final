import Link from "next/link";
import styles from "./menu.module.css";
import ClerkUserBtn from "../ClerkUserBtn/ClerkUserBtn";

const Menu = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.threeDots}
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2FPNG%2Fellipsis.png?alt=media&token=0a63db15-6b1a-4978-bef8-b1bedf23efc8"
        alt=""
      />
      <div className={styles.dropdownMenu}>
        <Link rel="noopener noreferrer" href="/profile">
          <img
            className={styles.linkIcon}
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2FPNG%2Faccount.png?alt=media&token=2c97de21-f407-4850-b7fa-422a81f3ba4b"
            alt=""
          />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kxwxn"
        >
          <img
            className={styles.linkIcon}
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2FPNG%2Fgithub-logo.png?alt=media&token=111e7b3b-eae4-4041-a9b9-48cad8251492"
            alt=""
          />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/kiwon-kim-b593a8229/"
        >
          <img
            className={styles.linkIcon}
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2FPNG%2Flinkedin.png?alt=media&token=bea7500a-642f-4a3b-9594-b84443f4a737"
            alt=""
          />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/n0wlk"
        >
          <img
            className={styles.linkIcon}
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2FPNG%2Finstagram.png?alt=media&token=5b7aa231-0137-42d0-9550-a6d850c405fc"
            alt=""
          />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:kiwonKim@n0wlk.com"
        >
          <img
            className={styles.linkIcon}
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2FPNG%2Farroba.png?alt=media&token=db5b874a-8cf9-41bb-8040-863f0f5eca88"
            alt=""
          />
        </Link>
        <ClerkUserBtn />
      </div>
    </div>
  );
};

export default Menu;

// log in 상태이면, signout 페이지, log out 상태이면, signin 페이지 이동하는 Link.
// 1. nextauth 로 로그인한 정보를 가지고 와서, 현재 로그인한 상태인지 확인하고, user정보를 담는다.
// 2.
