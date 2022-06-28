import styles from "./style.module.css";
import { useContext } from "react";
import Text from "../../../components/Common/Text";
import { useNavigate, useLocation } from "react-router-dom";
import { pageNameContext } from "../../../components/layout/Layout";

//let book = null;
// Creator : Team B - Ayellet & Hodaya
function PushUpInstructions(props) {
  const [pageName, setPageName] = useContext(pageNameContext);
  const navigate = useNavigate();
  const location = useLocation();
  const nevigateObject = location.state.nevigateObject;

  // setPageName(`Pushup ${nevigateObject.roundCounter}/4`);

  const startRound = () => {
    navigate("/train-reading/timer", { state: { nevigateObject } });
  };
  debugger;
  const book = nevigateObject.bookName;
  let instructionsText = "";

  nevigateObject.roundCounter === 4
    ? (instructionsText = `Continue reading ${book} book at the pace of the sound, for the next 3 minutes - you can use the stop button if you can't keep up with the music rate.`)
    : (instructionsText = `Continue reading ${book} book at the pace of the sound, for the next 3 minutes - we will notify you when time is up.`);

  return (
    <>
      {/* <Header /> */}
      <div>
        <img id="headphones" alt="" className={styles.headphones} />
      </div>
      <div id="playDiv">
        <button onClick={startRound}>start now</button>
        <Text title="With your headphones on," text={instructionsText} />
      </div>
    </>
  );
}

export default PushUpInstructions;
