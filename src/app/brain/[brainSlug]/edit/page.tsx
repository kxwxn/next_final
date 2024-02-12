import styles from "./edit.module.css";
import SlugEditForm from "@/components/SlugEditForm/SlugEditForm";

interface paramsType {
  params: { brainSlug: string; searchParams: any };
}
export default async function Edit({ params }: paramsType) {
  const brainSlug = params.brainSlug;
  return (
    <div className={styles.container}>
      <SlugEditForm brainSlug={brainSlug} />
    </div>
  );
}
