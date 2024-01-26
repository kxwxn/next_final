"use client";
import { UserButton, useUser, SignInButton } from "@clerk/nextjs";
import styles from "./ClerkUserBtn.module.css";

const ClerkUserBtn = () => {
  const { user, isLoaded } = useUser();

  return (
    <div>
      {isLoaded ? (
        user ? (
          <UserButton afterSignOutUrl="/" appearance={{
            elements: {
              formButtonPrimary: styles.userButton,
            },
          }} />
        ) : (
          <SignInButton afterSignInUrl='/' mode="modal">
            <div rel="noopener noreferrer">
              <img
                className={styles.linkIcon}
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2FPNG%2Flog-in.png?alt=media&token=c06ef8c4-499a-491c-8e3c-a1fef0df6ab5"
                alt=""
              />
            </div>
          </SignInButton>
        )
      ) : null}
    </div>
  );
};

export default ClerkUserBtn;
