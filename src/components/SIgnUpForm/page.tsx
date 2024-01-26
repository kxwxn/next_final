import styles from "./signupform.module.css";
import CloseBtn from "../CloseBtn/CloseBtn";

const SignUpForm = () => {
  return (
    <>
      <div className={styles.modalBackground}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <CloseBtn />
            <div>create an account</div>
          </div>
          <form method="POST" action={"/api/auth/signup"}>
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
