import styles from "./ThreeDCardForm.module.css";
import ThreeJSBrainCard from "@/components/ThreeJS/ThreeJSBrainCard";

export default function ThreeDCardForm(props: any) {
  console.log(props);
  const BrainData = props.result;

  const cardRendering = BrainData.map((item: any, index: number) => (
    <div key={index} className={styles.frame}>
      <ThreeJSBrainCard uri={"/brain/" + item._id} title={item.title} />
    </div>
  ));

  return <div className={styles.container}>{cardRendering}</div>;
}

// 부모 컴포넌트인 Brain에서 props로 데이터를 받는다.
// 그 받은 데이터를 클라이언트 컴포넌트인 ThreeJSBrainCard 컴포넌트로 넘겨줘서 사용할수 있게 한다.
