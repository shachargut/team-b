import styles from "./style.module.css";
import Clock from "../../../components/common/Clock";
// import SoundFooter from "../../../components/common/SoundFooter"
import React from "react";
import {useEffect, useState, useRef} from "react"
//import audioSrc from "./wush_mp3/wush_10_1min.mp3"
//import SoundFooter from "../../../components/common/SoundFooter"


// TODO: implement the rapid function that will implement the audio changes
// TODO: implement the sound button here!! 

// Creator : Team H - Nurit & Milka
function Training() {
  const audioRef = useRef();
  const lpm = 9;
  let [fileName, lpmFile] = pickFile(lpm);
  let changePercent = lpm / lpmFile;

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
}

function onComplete(){
  console.log("onComplete")
}


const freeStyleFuncs = {
  onPlay: onPlay, //will turn on the music + remove button and add footer
  onPause: onPause, //will pause the music + remove footer and add button
  rapid: ()=>{console.log("rapid")}, // what to send when freeStyle false??
  onComplete: onComplete
}

  return (
    <>
    {/* <audio src={audioSrc} ref={audioRef}> </audio> */}
    <Clock freeStyle={true} time={180} funcs={freeStyleFuncs}></Clock>
      {/* <SoundFooter></SoundFooter> */}
    </>
  );
}

export default Training;






// function PushUpTimer() {


//   const audioRef = useRef();
//   const [lpm, setLpm] = useState(9);

//   let [fileName, lpmFile] = pickFile(lpm);
//   useEffect(() => {
//       // const audio = require(`./wush_mp3/wush_10_1min.mp3`);
//       console.log(audioRef.current);
//       // audioRef.current.src = require(`./wush_mp3/wush_10_1min.mp3`);
//       // console.log(audioRef.current.src);
//   }, []);


//   const [changePercent, setChangePercent] = useState(lpm / lpmFile);
//   const [sec, setSec] = useState(1);
//   console.log("lpm ", lpm);
//   console.log("lpmFile ", lpmFile);
//   const [play, setPlay] = useState(false);
//   function change() {
//       setTimeout(() => {
//           // let count = changePercent + ((0.125 * (lpm / lpmFile)) / 180)
//           let count = changePercent + ((0.125 * (lpm / lpmFile)) / 180)
//           // let count = changePercent * (1 + (0.125 / 180))

//           setChangePercent(count)
//       }, 1000);
//   }
//   useEffect(() => {
//       if (play) {
//           change();
//           setSec(sec + 1)
//           // debugger;
//           // audioRef.current.src = audio;
//           // console.log(audioRef.current.src);
//           audioRef.current.playbackRate = changePercent;
//           audioRef.current.play();
//           // console.log(Date.now().toString());
//           console.log(changePercent);
//       }

//   }, [changePercent, play])

//   // audioRef.current.src = audio;
//   // console.log(audioRef.current.src)
//   // audioRef.current.playbackRate = changePercent;

//   return (
//       <div>
          // <audio ref={audioRef}> </audio>
//           <p>{changePercent / (lpm / lpmFile)}</p>
//           <p>{sec}</p>
//           <button onClick={() => { setPlay(true); audioRef.current.play(); }}>play </button>
//           <button onClick={() => { setPlay(false); audioRef.current.pause() }}>pause </button>

//       </div>)
// }

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