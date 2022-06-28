import styles from "./style.module.css";

// Creator : Team H - batya
export default function SquareButton(props) {
  // TO DO : get props from DB of person number LPM
  return (
    <>
      <button className={styles.squareButton}>{props.children} </button>
    </>
  );
}
