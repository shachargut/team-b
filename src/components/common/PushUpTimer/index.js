import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PushUpTimer(props) {
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  const location = useLocation();
  const navigate = useNavigate(); //remove
  const nevigateObject = location.state.nevigateObject;

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  // remove
  function navigateInst() {
    nevigateObject.roundCounter++;
    navigate("/train-reading/instructions", { state: { nevigateObject } });
  }
  // remove

  return (
    <div>
      <h1>{nevigateObject.roundCounter}</h1>
      {minutes === 0 && seconds === 0 ? null : (
        <h1>
          {" "}
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      )}
      {/* remove */}
      <button onClick={navigateInst}> navigate to inst</button>
    </div>
  );
}

function Music() {}
