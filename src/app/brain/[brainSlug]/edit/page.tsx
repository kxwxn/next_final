import styles from "./edit.module.css";
import SlugEditForm from "@/components/SlugEditForm/SlugEditForm";

export default async function Edit() {
  return (
    <div className={styles.container}>
      <SlugEditForm />
    </div>
  );
}
