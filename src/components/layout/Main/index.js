import Test from "../../test/Test";
import Header from "../header";
import Nav from "../Nav";
import Popup from "../Popup";
import { Outlet, Route, Routes } from "react-router-dom"
// import TextArea from "../common/TextArea/Index";
import TeamH from "../../teams/TeamH";
import Training from "../../../pages/FreeStyle/Training"
import Exercise from "../../../pages/TrainReading/Level/Exercise"
import ExerciseClock from "../../../pages/TrainReading/Level/ExerciseClock"
import ExerciseQuestion from "../../../pages/TrainReading/Level/ExerciseQuestion"
import ExerciseRate from "../../../pages/TrainReading/Level/ExerciseRate"
import ExerciseResult from "../../../pages/TrainReading/Level/ExerciseResult"
// import TeamC from '../../teams/TeamC'
//---- נא לקבל שינויים לפופאפ קונטקטס -team-b
import { useContext } from "react";
import { dataContext } from "../../../context/context";
import BookDetails from "../../../pages/TrainReading/BookDetails";
import BookInfo from "../../../pages/TrainReading/BookInfo"
import FourQues from "../../../pages/TrainReading/FourQues";
import PushUpTimer from "../../../pages/TrainReading/PushUpTimer";
import PushUpInstructions from "../../../pages/TrainReading/PushUpInstructions";
//----
// import Popup from "../Popup/Popup"
// import {  Route, Routes } from "react-router-dom"
import CalibrateCam from "../../../pages/TrainFocus/CalibrateCam";
// import TextArea from "../common/TextArea/Index";
// import Context from "../../../context";

import Results from "../../../pages/TrainFocus/TrainFocusResults";
import StartFocus from "../../../pages/TrainFocus/StartFocus/StartFocus";
// import Exercise from "../../../pages/TrainFocus/Exercise";
//  import Popup from "./popup/Popup";
// import { Outlet, Route, Routes } from "react-router-dom";
// import TextArea from "../common/TextArea/Index";
// import Context from "../../../context";

function Main() {
  const { popup } = useContext(dataContext);
  return (
    <>
      <Header />

      
      <Routes>
        {/* Team A */}
        <Route path="teama">
          {/* <Route index element={<TeamA />} /> */}
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team B */}
        <Route path="train-reading">
          <Route index element={<BookDetails />} />
          <Route path="book-info" element={<BookInfo />} />
          <Route path="instructions" element={<PushUpInstructions />} />
          <Route path="timer" element={<PushUpTimer />} />
          <Route path="Questions" element={<FourQues />} />
        </Route>

        {/* Team C */}
        <Route path="train_reading_level">
          {/* <Route index element={<>team's components</>} /> */}
          <Route path="exercise" element={<Exercise />} />
          <Route path="exercise_clock" element={<ExerciseClock />} />
          <Route path="rate" element={<ExerciseRate />} />
          <Route path="question" element={<ExerciseQuestion />} />
          <Route path="result" element={<ExerciseResult />} />
        </Route>

        {/* Team D */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team E */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team F */}
        <Route path="/teamf">
          {/* <Route index element={<TeamF />} /> */}
          {/* <Route path="components-path" element={<TeamF />} /> */}
        </Route>

        {/* Team G */}
        <Route path="/train-focus">
          <Route index element={<>team's components</>} />
          <Route path="exercise" element={<Exercise />} />
          <Route path="StartFocus" element={<StartFocus />} />
          <Route path="result" element={<Results />} />
          <Route path="calibration" element={<CalibrateCam />} />
          {/* <Route path="/result" element={<Results />} /> */}
        </Route>

        {/* Team H */}
        <Route path="/teams/TeamH">
          <Route index element={<TeamH />} />
          <Route path="/teams/TeamH/Training" element={<Training />} />
          {/* <Route path="components-path" element={<>team's components</>} /> */}
        </Route>

        {/* Test */}
        <Route path="/test" element={<Test />} />
      </Routes>

      <Nav />
      {popup && (
        <Popup bookDetails={{ name: "harry potter", genre: "novel" }} />
      )}
    </>
  );
}
export default Main;
