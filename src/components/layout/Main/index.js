<<<<<<< HEAD:src/components/layout/Main.js
import Header from "./Header";
import Nav from "./Nav";
import Popup from "./Popup";
import { Outlet, Route, Routes } from "react-router-dom";
import Test from "../test/Test";
import PushUpInstructions from "../Common/PushUpInstructions";
import PushUpTimer from "../Common/PushUpTimer";
import BookInfo from "../Common/BookInfo";
=======
import Test from "../../test/Test";
import Header from "../header";
import Nav from "../Nav";
import Popup from "../popup/Popup";
import { Outlet, Route, Routes } from "react-router-dom"
import TextArea from "../common/TextArea/Index";
import Context from "../../../context";

>>>>>>> 67480f9c441bcb10a0bd8ce910d0742857bd762c:src/components/layout/Main/index.js

function Main() {
  return (
    <>
      <Header />

      {/* content */}
      <Routes>
        {/* Team A */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team B */}
        <Route path="train-reading">
          <Route index element={<BookInfo />} />
          <Route path="instructions" element={<PushUpInstructions />} />
          <Route path="timer" element={<PushUpTimer />} />
        </Route>

        {/* Team C */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
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
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team G */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team H */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Test */}
        <Route path="/test" element={<Test />} />
      </Routes>

      <Nav />
      <Popup />
    </>
  );
}

export default Main;
