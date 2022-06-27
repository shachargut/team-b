import styles from './style.module.css'
export default function FunctionBtn(props) {
  return (
    <>
      <div className={`${styles.word}`}>{props.name}</div>
      {props.name === "Weekly Assessment" && (
        <div className={`${styles.word}`}>`access in {/* days left*/} days`</div>
      )}
    </>
  );
}
