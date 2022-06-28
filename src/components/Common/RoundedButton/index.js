import { useState } from "react";
import styles from "./style.module.css";

// Creator : Team H - batya
export default function RoundedButton(props) {
  const [isplay, setIsPlay] = useState(0);
  return (
    <>
      {isplay ? (
        <button
          className={styles.RoundedButton}
          onClick={() => {
            console.log("isplay");
            setIsPlay(!isplay);
          }}
        >
          {" "}
          ||{" "}
        </button>
      ) : (
        <button
          className={styles.RoundedButtonPlay}
          onClick={() => {
            setIsPlay(!isplay);
          }}
        >
          {" "}
          ▶{" "}
        </button>
      )}
    </>
  );
}
