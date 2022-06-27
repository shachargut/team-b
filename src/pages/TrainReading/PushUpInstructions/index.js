import styles from "./style.module.css";
import { useState, useEffect, useContext } from "react";
import Text from "../Text";
import { useNavigate, useLocation } from "react-router-dom";
// import pageNameContext from "../../components/layout";

//let book = null;
// Creator : Team B - Ayellet & Hodaya
function PushUpInstructions(props) {
  const [roundCounter, setRoundCounter] = useState(0);
  //   const [pageName, setPageName] = useContext(pageNameContext);
  const navigate = useNavigate();
  const location = useLocation();
  const nevigateObject = location.state.nevigateObject;

  // useEffect(() => {
  //   // update header text
  //   //setPageName(`Pushup {roundCounter}/4`);
  //   setRoundCounter(location.state.roundCounter + 1);
  // }, []);

  const startRound = () => {
    navigate("/train-reading/timer", { state: { nevigateObject } });
  };

  const book = nevigateObject.bookName;
  const instructionsText = `Continue reading ${book} book at the pace of the sound, for the next 3 minutes - we will notify you when time is up.`;

  return (
    <>
      {/* <Header /> */}
      <div>
        <img id="headphones" className={styles.headphones} />
      </div>
      <div id="playDiv">
        <button onClick={startRound}>start now</button>
        <Text title="With your headphones on," text={instructionsText} />
      </div>
    </>
  );
}

export default PushUpInstructions;
