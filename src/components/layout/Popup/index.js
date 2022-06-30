import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import {dataContext} from "../../../context/context";
import TrueBtn from "../../common/trueBtn";
import YesBtn from "../../common/yesBtn";
import SubmitBtn from "../../common/SubmitBtn";
//import { } from '../../../context'
// import styles from './style.module.css';

export default function Popup({ bookDetails }) {
  // const [data, setData] = useState("")
  // const [loading, setLoading] = useState(true)
  const { popup, changePopupState, userDetails  } = useContext(dataContext);

  const navigate = useNavigate();
  
  const nevigateObject = {
    bookName: userDetails.currentBook.name,
    genre: userDetails.currentBook.genre,
    roundCounter: 1,
    lpm:userDetails.TR[userDetails.TR.length-1].Value,
    formInfo:{},
    rateData:{
      LPM:0,
      newLPM: 0,
      round:0,
      justRight: false
    }
  };

  // const nevigateObject = {
  //   bookName: userDetails.currentBook.name,
  //   genre: userDetails.currentBook.genre,
  //   roundCounter: 1,
  //   lpm:userDetails.TR[TR.lenght-1].value
  // };

  const yes = () => {
    changePopupState(false);
    navigate("/train-reading/instructions", { state: { nevigateObject } });
  };
  const no = () => {
    changePopupState(false);
    navigate("/train-reading/book-info");
  };

  return (
    <>
      <div className={`overlay ${popup ? "" : "close"}`}>
        <div className="popup right back-purple">
          {/* <div className="left back-purple"> */}
          <div className="title">Reading Exercise</div>
          <div className="txt">Are you still reading {userDetails.currentBook.name}?</div>
          <div className=".btnPopup">
          <YesBtn  handleClickyes={yes} handleClickno={no} yes={"yes"} no={"no"}/>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

//----------28/22 19:15 team-b

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './style.css';

// export default function Popup() {

//     const [popup, setPopup] = useState(true)
//     const navigate = useNavigate()
//     const yes = () => {
//         setPopup(false)
//         navigate('/instruction')
        
//     }
//     const no = () => {
//         setPopup(false)
//         navigate('/bookInfo')
//     }

//     return <div
//         className={`overlay ${popup ? '' : 'close'}`}
//     >
//         <div className='popup'>
//             <button onClick={() => yes()}>yes</button>
//             <button onClick={() => no()}  >No</button>
//         </div>

//     </div>
// }
