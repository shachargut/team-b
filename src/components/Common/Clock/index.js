import React from "react";
import ReactDOM from "react-dom";
import {
  CountdownCircleTimer,
  useCountdown,
} from "react-countdown-circle-timer";
import { useState } from "react";
import styles from "./style.module.css";
import SquareButton from "../SquareButton";
import RoundedButton from "../RoundedButton";

// Creator : Team H - Milka

//instructions: when you use this component you should
//  send a props named "freeStyle" with a value:false.

function Clock(props) {
  const [play, setPlay] = useState(false);
  let freeStyle = props.freeStyle;
  const [rapid, setRapid] = useState(0);

  const renderTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime - minutes * 60;
    return (
      <div className="timer">
        {freeStyle ? (
          <div className={styles.squarebutton}>
            <SquareButton>{rapid} LPM</SquareButton>
          </div>
        ) : (
          <div className={styles.value}>
            {minutes < 10 && 0}
            {minutes}:{seconds < 10 && 0}
            {seconds}
          </div>
        )}
        <div
          // className={styles.playPause}
          onClick={() => {
            !freeStyle && setPlay(!play);
          }}
        >
          <RoundedButton></RoundedButton>
        </div>
      </div>
    );
  };

  return (
    <>
      {freeStyle && (
        <button
          className={styles.plusMinus}
          onClick={() => setRapid(rapid + 2)}
        >
          +
        </button>
      )}
      <div>
        <CountdownCircleTimer
          rotation={"counterclockwise"}
          isPlaying={play}
          duration={180}
          colors={["#7D56A5"]}
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}
          trailColor={"#FEEFEC"}
          strokeLinecap={"square"}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      {freeStyle && (
        <button
          className={styles.plusMinus}
          onClick={() => setRapid(rapid - 2)}
        >
          <div className={styles.plusMinusSign}>-</div>
        </button>
      )}
    </>
  );

  // return <CountdownCircleTimer></CountdownCircleTimer>;
  // console.log("stop");
}

export default Clock;
