import React, { createContext, useState } from 'react';

import Main from './Main';
import popupContext from '../../context/popupContext';
export const pageNameContext = createContext();

export default function Layout() {
    const [popup, setPopup] = useState(false);
    const pageNameState = useState();
    return (
        <div className='Layout'>
            <popupContext.Provider value={{ popup, setPopup }}>
                <pageNameContext.Provider value={pageNameState}>
                    <Main />
                </pageNameContext.Provider>
            </popupContext.Provider>
        </div>
    )
}
