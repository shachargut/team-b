import { React, useState, useEffect, useRef, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { pageNameContext } from "../../../components/layout/Layout";

import Clock from "../Clock";

const audio = require("../../../assets/audio/woc.mp3");
const nevigateObject = {
  bookName: "bookName",
  genre: "genre",
  roundCounter: 1,
};
export default function PushUpTimer(props) {
  let audioRef = useRef();
  let continueRef = useRef();
  let stopRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const [pageName, setPageName] = useContext(pageNameContext);

  // const nevigateObject = location.state.nevigateObject;

  // setPageName(`Pushup ${nevigateObject.roundCounter}/4`);

  useEffect(() => {
    audioRef.current.src = audio;
  }, []);

  // remove
  function navigateInst() {
    //continueRef.current.style.display = "block";
    nevigateObject.roundCounter++;
    navigate("/train-reading/instructions", { state: { nevigateObject } });
  }
  // remove
  let x =
    nevigateObject.roundCounter === 4
      ? (stopRef.current.style.display = "block")
      : "";

  const playAudio = () => {
    audioRef.current.play();
    let x =
      nevigateObject.roundCounter === 4
        ? (stopRef.current.style.display = "block")
        : "";
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };

  const showContinue = () => {
    continueRef.current.style.display = "block";
  };

  const changeRate = () => {};

  const clockFunctions = {
    onStart: playAudio,
    onPause: pauseAudio,
    onComplete: showContinue,
    onTick: changeRate,
  };

  return (
    <div>
      <div>
        <h1>{nevigateObject.roundCounter}</h1>
        <Clock freeStyle={false} func={clockFunctions} />
        <audio ref={audioRef}> </audio>
        <button onClick={() => {}} ref={continueRef} hidden>
          continue
        </button>
        <button onClick={() => {}} ref={stopRef} hidden>
          stop
        </button>
      </div>
      {/* remove */}
      <button onClick={navigateInst}> navigate to inst</button>
    </div>
  );
}
