import React, { createContext, useState } from "react";
import Main from "./Main";
export const pageNameContext = createContext();

export default function Layout() {
  const pageNameState = useState();
  return (
    <div className="Layout">
      <pageNameContext.Provider value={pageNameState}>
        <Main />
      </pageNameContext.Provider>
    </div>
  );
}
