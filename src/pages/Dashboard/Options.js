import FunctionBtn from "./FunctionBtn";
import styles from "./style.module.css";

export default function Options() {
  return (
    <>
      <div className={`${styles.graf}`}>
        <div className={`${styles.inside}`}>
          <FunctionBtn name="Train Reading" />
        </div>
      </div>
      <div className={`${styles.graf}`}>
        <div className={`${styles.inside}`}>
          <FunctionBtn name="Train Focus" />
        </div>
      </div>
      <div className={`${styles.graf}`}>
        <div className={`${styles.inside}`}>
          <FunctionBtn name="Weekly Assessment" />
        </div>
      </div>
      <div className={`${styles.graf}`}>
        <div className={`${styles.inside}`}>
          <FunctionBtn name="Freestyle" />
        </div>
      </div>
    </>
  );
}
