import React from 'react'
import { useState, useEffect, useRef } from 'react';



function AudioChangeRate(props){

    const audioRef = useRef();
    const [lpm, setLpm] = useState(56);
    let lpmFile = pickFile(lpm);
    useEffect(() => {
        const audio = require(`../../../assets/audio/wush_${lpmFile}_1min.mp3`);
        audioRef.current.src = audio;
        console.log(audioRef.current.src);
    }, []);


    const [changePercent, setChangePercent] = useState(lpm / lpmFile);
    const [sec, setSec] = useState(1);
    //console.log("lpm ", lpm);
    //console.log("lpmFile ", lpmFile);
    //console.log("AudioB", props.play);
    //const [play, setPlay] = useState(false);
    function change() {
        setTimeout(() => {
            // let count = changePercent + ((0.125 * (lpm / lpmFile)) / 180)
            let count = changePercent + ((0.125 * (lpm / lpmFile)) / 180)
            // let count = changePercent * (1 + (0.125 / 180))

            setChangePercent(count)
        }, 1000);
    }
    useEffect(() => {
        if (props.play) {
            //console.log("play was clicked");
            change();
            setSec(sec + 1)
            // debugger;
            // audioRef.current.src = audio;
            // console.log(audioRef.current.src);
            audioRef.current.playbackRate = changePercent;
            audioRef.current.play();
            // console.log(Date.now().toString());
            //console.log(changePercent);
        }
        if(!props.play){
            //console.log("pause was clicked");
            audioRef.current.pause();
        }
        
    }, [changePercent, props.play])

    // audioRef.current.src = audio;
    // console.log(audioRef.current.src)
    // audioRef.current.playbackRate = changePercent;

    return (
        <div>
            <audio ref={audioRef}> </audio>
            <p>{changePercent / (lpm / lpmFile)}</p>
            <p>{sec}</p>
            {/* <button onClick={() => { setPlay(true); audioRef.current.play(); }}>play </button>
            <button onClick={() => { setPlay(false); audioRef.current.pause() }}>pause </button> */}

        </div>)
}


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
    return array[index];
}


export default AudioChangeRate;