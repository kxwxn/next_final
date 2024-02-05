import styles from "./edit.module.css";
import SlugEditForm from "@/components/SlugEditForm/SlugEditForm";

export default async function Edit({ params }) {
  const brainSlug = params.brainSlug;
  return (
    <div className={styles.container}>
      <SlugEditForm brainSlug={brainSlug} />
    </div>
  );
}
