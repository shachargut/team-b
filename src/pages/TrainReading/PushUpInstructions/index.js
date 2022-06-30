

import styles from "./style.module.css";
import { useContext, useEffect } from "react";
//import Text from "../../../components/Common/Text";
import { useNavigate, useLocation } from "react-router-dom";
import { dataContext } from "../../../components/../context/context";
//import SubmitBtn from "../../../components/Common/SubmitBtn";
import FooterStart from "../../../components/common/FooterStart";

function PushUpInstructions(props) {
  const { pageName, changePageName } = useContext(dataContext);
  const navigate = useNavigate();
  const location = useLocation();
  const earphonesImg = require("../../../assets/img/headphone.png")
  //  debugger
  const nevigateObject = location.state.nevigateObject;
  const round = nevigateObject.roundCounter
  console.log("try",round);

  let instructionsText;
  useEffect(() => {
    console.log("send from insreuction", nevigateObject.roundCounter)
    if(nevigateObject.roundCounter==1){changePageName(`Pushup ${nevigateObject.roundCounter}/4`)}
    else if(nevigateObject.roundCounter==3) {changePageName(`Pushup ${nevigateObject.roundCounter-1}/4`);}
    else if(nevigateObject.roundCounter==5) {changePageName(`Pushup ${nevigateObject.roundCounter-2}/4`);}
    else if(nevigateObject.roundCounter==7) {changePageName(`Pushup ${nevigateObject.roundCounter-3}/4`);}
    
  }, []);
  nevigateObject.roundCounter === 4
    ? (instructionsText = `Continue reading ${nevigateObject.bookName} book at the pace of the sound, for the next 3 minutes - you can use the stop button if you can't keep up with the music rate.`)
    : (instructionsText = `Continue reading ${nevigateObject.bookName} book at the pace of the sound, for the next 3 minutes - we will notify you when time is up.`);
  // book = nevigateObject.bookName;

  const startRound = () => {
    navigate("/train-reading/timer", { state: { nevigateObject } });
  };

  return (
    <>
      {/* <Header /> */}
      <div className={styles.centerImg}>
        <div id="headphones" alt="" className={styles.headphones} />
      </div>
      <div id="playDiv">
        <FooterStart
          startFunction={() => startRound()}
          title="Start Now"
          subtitle = "With your headphones on,"
          explanation={instructionsText}
          img = {earphonesImg}
        />
      </div>
    </>
  );
}

export default PushUpInstructions;

// const nevigateObject = {
//   bookName: "bookName",
//   genre: "genre",
//   roundCounter: 1,
//   lpm: 20,
// };

//let book = null;
// Creator : Team B - Ayellet & Hodaya
// function PushUpInstructions(props) {
//    // debugger;
//   const extractContext = useContext(pageNameContext);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const nevigateObject = null, book = '';

//   const startRound = () => {
//       navigate("/train-reading/timer", { state: { nevigateObject } });
//     };
//     let instructionsText = "";

//     // nevigateObject.roundCounter === 4
//     // ? (instructionsText = `Continue reading ${book} book at the pace of the sound, for the next 3 minutes - you can use the stop button if you can't keep up with the music rate.`)
//     // : (instructionsText = `Continue reading ${book} book at the pace of the sound, for the next 3 minutes - we will notify you when time is up.`);
//     useEffect(()=>{
//        nevigateObject = location.state.nevigateObject
//        book = nevigateObject.bookName;
//        extractContext.setPageName(`Pushup ${nevigateObject.roundCounter}/4`);
//        nevigateObject.roundCounter === 4
//     ? (instructionsText = `Continue reading ${book} book at the pace of the sound, for the next 3 minutes - you can use the stop button if you can't keep up with the music rate.`)
//     : (instructionsText = `Continue reading ${book} book at the pace of the sound, for the next 3 minutes - we will notify you when time is up.`);
//    },[])
//   return (
//     <>
//       {/* <Header /> */}
//       <div>
//         <img id="headphones" alt="" className={styles.headphones} />
//       </div>
//       <div id="playDiv">
//         <FooterStart
//           startFunction={startRound}
//           title="With your headphones on,"
//           explanation={instructionsText}
//         />
//       </div>
//     </>
//   );
// }

// export default PushUpInstructions;