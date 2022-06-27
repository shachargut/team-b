import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PushUpInstructions from "../../Common/PushUpInstructions";
import "./style.css";

export default function Popup() {
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();
  const yes = () => {
    setPopup(false);
    navigate("train-reading/instructions", { bookInfo: "harry poter" });
    // return <PushUpInstructions bookInfo="harry poter" />;
  };
  const no = () => {
    setPopup(false);
    navigate("/bookInfo");
  };

  return (
    <div className={`overlay ${popup ? "" : "close"}`}>
      <div className="popup">
        <button onClick={() => yes()}>yes</button>
        <button onClick={() => no()}>No</button>
      </div>
    </div>
  );
}
