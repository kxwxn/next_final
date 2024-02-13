import styles from "./ArchivingSubmitBtn.module.css";

interface BtnSetProps {
  collectionName: string;
  redirectUrl: string;
}

export default function ArchivingSubmitBtn(props: BtnSetProps) {
  console.log("BtnSet", props);

  return (
    <div className={styles.buttonsContianer}>
      <button className={styles.btnArchive} type="submit">
        <span>Click!</span>
        <span>Publish</span>
      </button>
    </div>
  );
}

// ArchivingBtnSet을 사용하는 컴포넌트에서 새로고침을 하면 Delete와 Save as Draft 버튼이 렌더링이 이상하게 되고 작동이 된지 않는다.
