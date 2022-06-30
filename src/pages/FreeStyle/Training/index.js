import styles from "./style.module.css";
import Clock from "../../../components/common/Clock";
// import SoundFooter from "../../../components/common/SoundFooter"
import React from "react";
import {useEffect, useState, useRef} from "react"
import audioSrc from "../../../assets/audio/wush_20_1min.mp3"
//import SoundFooter from "../../../components/common/SoundFooter"


// TODO: implement the rapid function that will implement the audio changes
// TODO: implement the sound button here!! 

// Creator : Team H - Nurit & Milka
function Training() {
  const audioRef = useRef();
  const [lpm,setLpm] = useState(10) // we have to pull it from the server
  let [fileName, lpmFile] = pickFile(lpm);
  let changePercent = lpm / lpmFile;
  
  //const [load,setLoad] = useState(false) // we have to pull it from the server
  // const audio = new Audio(require(`./wush_mp3/wush_10_1min.mp3`));  

  function change() {
    console.log("change");
      setTimeout(() => {
          // let count = changePercent + ((0.125 * (lpm / lpmFile)) / 180)
          let count = changePercent + ((0.125 * (lpm / lpmFile)) / 180)
          // let count = changePercent * (1 + (0.125 / 180))
          changePercent = count;
          console.log("hi");
      }, 1000);
  }

function onPlay(){
  console.log("onPlay");
  audioRef.current.play(); //not working on 
  change();
  // audioRef.current.playbackRate = changePercent;
}



function onPause(){
  audioRef.current.pause();
  console.log("pause");
}

function onComplete(){
  console.log("onComplete")
}

// console.log(load);

const freeStyleFuncs = {
  onPlay: onPlay, //will turn on the music + remove button and add footer
  onPause: onPause, //will pause the music + remove footer and add button
  rapid: ()=>{console.log("rapid")}, // what to send when freeStyle false??
  onComplete: onComplete
}
// useEffect(() => {
//  if (audioRef.current) setLoad(true)
//   }, [audioRef])

  return (
    <>
    <audio src={audioSrc} ref={audioRef}> </audio>
 <Clock freeStyle={false} time={180} funcs={freeStyleFuncs}  initRapidValue={lpm}></Clock>
      {/* <SoundFooter></SoundFooter> */}
    </>
  );
}

export default Training;




function pickFile(lpm) {
  let array = [10, 20, 40, 60, 80, 100];
  let index = 0;
  for (let i in array) {
      if (lpm > array[i]) {
          index = Number(i);
      }
  }
  if (lpm - array[index] > array[index + 1] - lpm) {
      index++;
  }
  // console.log(index);
  let fileName = `./wush_mp3/wush_${array[index]}_1min.mp3`;

  return [fileName, array[index]];
}