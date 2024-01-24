import { redirect, useRouter } from "next/navigation";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import styles from "./signupform.module.css";
import CloseBtn from "../CloseBtn/CloseBtn";

const SignUpForm = () => {
  const submit = async (formData: any) => {
    "use server";
    let shouldRedirect = false;

    if (!formData.get("id")) {
      return { message: "no_id" };
    }
    if (!formData.get("nickname")) {
      return { message: "no_nickname" };
    }
    if (!formData.get("password")) {
      return { message: "no_password" };
    }
    try {
      const response = await fetch(`${process.env}`, {
        method: "post",
        body: formData,
        credentials: "include",
      });
      if (response.status === 403) {
        return { message: "user_exists" };
      }
      shouldRedirect = true;
    } catch (err) {
      console.error(err);
      shouldRedirect = false;
    }
    if (shouldRedirect) {
      redirect("/"); // redirect 는 try&catch에서 절대 사용하면 안된다.
    }
    // 프론트엔드서버.
    // 이곳에서 바로 DB에 접속해서 데이터를 가져오고 보낼수 있다.
  };

  return (
    <>
      <div className={styles.modalBackground}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <CloseBtn />
            <div>create an account</div>
          </div>
          <form action={submit}>
            <div className={styles.modalBody}>
              <div className={styles.inputDiv}>
                <label className={styles.inputLabel} htmlFor="email">
                  email
                </label>
                <input
                  id="email"
                  name="email"
                  className={styles.input}
                  type="text"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className={styles.inputDiv}>
                <label className={styles.inputLabel} htmlFor="nickname">
                  nickname
                </label>
                <input
                  id="nickname"
                  name="nickname"
                  className={styles.input}
                  type="text"
                  placeholder="set your nickname"
                  required
                />
              </div>
              <div className={styles.inputDiv}>
                <label className={styles.inputLabel} htmlFor="password">
                  password
                </label>
                <input
                  id="password"
                  name="password"
                  className={styles.input}
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className={styles.inputDiv}>
                <label className={styles.inputLabel} htmlFor="image">
                  profile picture
                </label>
                <input
                  id="image"
                  name="image"
                  className={styles.input}
                  type="file"
                  accept="image/*"
                />
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button type="submit" className={styles.actionButton}>
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
