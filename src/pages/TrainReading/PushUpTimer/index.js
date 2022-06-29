import { React, useState, useEffect, useRef, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { pageNameContext } from "../../../components/layout/Layout";
import Clock from "../../../components/common/Clock";
import SubmitBtn from "../../../components/common/SubmitBtn";
import styles from "./style.module.css";

// const audio = require("../../../assets/audio/woc.mp3");

export default function PushUpTimer(props) {
  let audioRef = useRef();
  let continueRef = useRef();
  let stopRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const [pageName, setPageName] = useContext(pageNameContext);

  const nevigateObject = location.state.nevigateObject;

  setPageName(`Pushup ${nevigateObject.roundCounter}/4`);

  useEffect(() => {
    // audioRef.current.src = audio;
    // remove
    let x = "";
    nevigateObject.roundCounter === 4
      ? (stopRef.current.className = styles.btnshow)
      : (x = "");
  }, []);

  // remove
  function navigateInst() {
    // continueRef.current.className = styles.btnshow;
    nevigateObject.roundCounter++;
    navigate("/train-reading/instructions", { state: { nevigateObject } });
  }

  const playAudio = () => {
    // audioRef.current.play();
    // let x = "";
    // nevigateObject.roundCounter === 4
    //   ? (stopRef.current.className = styles.btnshow)
    //   : (x = "");
  };

  const pauseAudio = () => {
    // audioRef.current.pause();
  };

  const showContinue = () => {
    continueRef.current.className = styles.btnshow;
  };

  const changeRate = () => {};

  const clockFunctions = {
    onStart: playAudio,
    onPause: pauseAudio,
    onComplete: showContinue,
    onTick: changeRate,
  };

  // const continueBtnClick = () => {
  //   navigate("/train-reading/Questions");
  // };

  return (
    <div>
      <div>
        <Clock freeStyle={false} func={clockFunctions} />
        {/* <audio ref={audioRef}> </audio> */}
        <div className={styles.btnhide} ref={continueRef}>
          <SubmitBtn path="/train-reading/Questions" name="continue" />
        </div>
        <div className={styles.btnhide} ref={stopRef}>
          <SubmitBtn path="/train-reading/Questions" name="stop" />
        </div>
      </div>
      {/* remove */}
      <button onClick={navigateInst}> navigate to inst</button>
    </div>
  );
}

// ----------- ayellet && shacher fix 28/6 19:40

// import React from 'react'
// import { useState, useEffect } from 'react';



// export default function PushUpTimer(props) {

//     const [minutes, setMinutes] = useState(3);
//     const [seconds, setSeconds] = useState(0);
//     useEffect(() => {
//         let myInterval = setInterval(() => {
//             if (seconds > 0) {
//                 setSeconds(seconds - 1);
//             }
//             if (seconds === 0) {
//                 if (minutes === 0) {
//                     clearInterval(myInterval)
//                 } else {
//                     setMinutes(minutes - 1);
//                     setSeconds(59);
//                 }
//             }
//         }, 1000)
//         return () => {
//             clearInterval(myInterval);
//         };
//     });

//     return (
//         <div>
//             {minutes === 0 && seconds === 0
//                 ? null
//                 : <h1> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
//             }
//         </div>
//     )
// }

// function Music() {


// }


