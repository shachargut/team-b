import PushUpInstructions from "../../../pages/TrainReading/PushUpInstructions";
import BookInfo from "../../Common/BookInfo";
import PushUpTimer from "../../Common/PushUpTimer";
import Questions from "../../Common/Questions";

function TeamB() {
  return (
    <>
      <div>TeamB</div>
      <BookInfo />
      <PushUpInstructions />
      <PushUpTimer />
      <Questions />
    </>
  );
}

export default TeamB;
