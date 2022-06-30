import React, { createContext, useContext, useState } from "react";
import Main from "./Main";
import Login from "./login";
import { DataProvider } from "../../context/manageContext";
import fakeData from "../../context/fakeData";
//--contex for popup 19:51 team-b
import { popupContext } from "../../context/context";
export const pageNameContext = createContext();

//group c- yoav & yehoshua
export default function Layout() {
  return (
    <div className="Layout">
      <DataProvider>
        {/* <Login setUserLoginInfo={setUserLoginInfo}/> */}
        <Main />
        {/* <Login setUserLoginInfo={setUserLoginInfo}/> */}
      </DataProvider>
    </div>
  );
}





// import React, { createContext, useContext, useState } from "react";
// import Main from "./Main";
// import Login from "./login";
// import { dataContext } from "../../context/context";
// import fakeData from "../../context/fakeData";
// //--contex for popup 19:51 team-b
// import {popupContext} from "../../context/context";
// export const pageNameContext = createContext();

// //group c- yoav & yehoshua

// export default function Layout() {
//   const [pageName, setPageName] = useState("||||| default page name |||||");
//   const [userLoginInfo, setUserLoginInfo] = useState([]);
//   const [popup, setPopup] = useState(false);
//   // user information is pushed through props to Main, while its state is pushed to Login.
//   // This way, when a user performs login, a state is changed and the relevant area is rendered.
//   // Use case in thie app: user avatar in the header, along with potential user menu
//   const [data, setData] = useState(fakeData);

//   return (
//     <div className="Layout">
//       <dataContext.Provider
//         value={{
//           userDetails: fakeData.userDetails,
//           assesmentResults: fakeData.assesmentResults,
//           assesmentTemplates: fakeData.assesmentsTemplates,
//         }}
//       >
//         <popupContext.Provider value={{ popup, setPopup }}>
//         <pageNameContext.Provider value={{ pageName, setPageName }}>
//           {/* <Login setUserLoginInfo={setUserLoginInfo}/> */}
//           <Main userLoginInfo={userLoginInfo} />
//           {/* <Login setUserLoginInfo={setUserLoginInfo}/> */}
//         </pageNameContext.Provider>
//         </popupContext.Provider>
//       </dataContext.Provider>
//     </div>
//   );
// }
