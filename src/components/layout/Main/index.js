import Test from "../../test/Test";
import Header from "../header";
import Nav from "../Nav";
import Popup from "../Popup";
import { Outlet, Route, Routes } from "react-router-dom"
//import TextArea from "../common/TextArea/Index";
//import Context from "../../../context";
import BookInfo from "../../../pages/TrainReading/BookInfo";
import PushUpInstructions from "../../Common/PushUpInstructions"
import popupContext from "../../../context/popupContext";
import { useContext } from "react";
import TrainReading from "../../../pages/TrainReading/Bookdetails";


function Main() {
  const { popup } = useContext(popupContext)

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
        <Route path="train-reading" >

          <Route index element={<TrainReading />} />
          {/* <Route index element={<Popup />} /> */}
          <Route path="book-info" element={<BookInfo />} />
          <Route path="instructions" element={<PushUpInstructions />} />
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
        <Route path='/test' element={<Test />} />
      </Routes>



      {popup &&
        <Popup bookDetails={{ name: 'example', genre: 'roman' }} />
      }

      <Nav />


    </>
  );
}

export default Main;
