import { useContext, useState } from 'react';
import { pageNameContext } from '../Layout';
import nav from './img/nav-icon.png';

export default function Header(props) {
   const [pageName, setPageName] = useContext(pageNameContext) //adduming contect is in use
   return (
      <div>
         <div>
            <img src={nav}></img>
         </div>

         <div>
            {"Page Name"}
            {/* {props.pageName} - alternative  */}
         </div>

         <div>

         </div>
      </div>
   )
}