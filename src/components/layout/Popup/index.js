import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import {popupContext} from "../../../context/context";
import TrueBtn from "../../common/trueBtn";
import SubmitBtn from "../../common/SubmitBtn";
//import { } from '../../../context'
// import styles from './style.module.css';

export default function Popup({ bookDetails }) {
  // const [data, setData] = useState("")
  // const [loading, setLoading] = useState(true)
  const { popup, setPopup } = useContext(popupContext);
  const navigate = useNavigate();
  // console.log(popup);

  // useEffect(() => {
  //     async function getBook() {
  //         const url = "http://localhost:3001/api/book/book";
  //         const res = await fetch(url);
  //         const data = await res.json();

  //         setData(data)
  //         // debugger;
  //         setLoading(false)
  //         if (data.length == 0) {
  //             console.log("no data")
  //             navigate('/train-reading/book-info')
  //         }
  //         else {
  //             setPopup(true)
  //             console.log(data);
  //         }
  //     }
  //     getBook()
  // }, [])
  // console.log(data);
  // if (loading) {
  //     return <div></div>
  // }
  // console.log(data);
  //debugger;
  const nevigateObject = {
    bookName: bookDetails.name,
    genre: bookDetails.genre,
    roundCounter: 1,
  };

  const yes = () => {
    setPopup(false);
    navigate("/train-reading/instructions", { state: { nevigateObject } });
  };
  const no = () => {
    setPopup(false);
    navigate("/train-reading/book-info");
  };

  return (
    <>
      <div className={`overlay ${popup ? "" : "close"}`}>
        <div className="backpopup"> </div>
        <div className="popup ">
          <div className="title">Reading Exercise</div>
          <div className="txt">Are you still reading {bookDetails.name}?</div>
          <div className="btnPopup">
            <button className="btn_yes" onClick={yes}>
              Yes
            </button>
            <button className="btn_no" onClick={no}>
              No
            </button>
          </div>
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
