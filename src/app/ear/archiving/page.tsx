import styles from "./earArchiving.module.css";
import SpotifyPostForm from "@/components/SpotifyPostForm/SpotifyPostForm";

export default function () {
  return (
    <div className={styles.container}>
      <SpotifyPostForm />
    </div>
  );
}
