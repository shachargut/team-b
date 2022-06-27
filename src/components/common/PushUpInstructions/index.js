import styles from "./style.module.css";
import { useState, useEffect, useContext } from "react";
import Text from "../Text";
import { useNavigate } from "react-router-dom";
// import pageNameContext from "../../components/layout";

// Creator : Team B - Ayellet & Hodaya
function PushUpInstructions(props) {
  const [roundCounter, setRoundCounter] = useState(0);
  //   const [pageName, setPageName] = useContext(pageNameContext);
  const navigate = useNavigate();

  useEffect(() => {
    // update header text
    //setPageName(`Pushup {roundCounter}/4`);
    setRoundCounter(roundCounter + 1);
  }, []);

  const startRound = () => {
    navigate("timer", <PushUpTimer round={roundCounter} />);
  };
  return (
    <>
      {/* <Header /> */}
      <div>
        <img id="headphones" className={styles.headphones} />
      </div>
      <div id="playDiv">
        <button onClick={startRound}>start now</button>
        <Text
          title="With your headphones on,"
          text="Continue reading {props.bookName} book at the pace of the sound, for the next 3 minutes – we will notify you when time is up."
        />
      </div>
    </>
  );
}

export function PushUpTimer(props) {
  return <>PushUpTimer</>;
}

export default PushUpInstructions;
