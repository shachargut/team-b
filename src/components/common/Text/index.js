import styles from "./style.module.css";

// Creator : Team B - Ayellet & Hodaya
function Text(props) {
  return (
    <>
      <div className={styles.title} id="title">
        {props.title}
      </div>
      <div className={styles.text} id="text">
        {props.text}
      </div>
    </>
  );
}

export default Text;
