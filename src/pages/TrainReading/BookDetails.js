import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {dataContext} from "../../context/context";
//---------
//זמני לאתחול הדגל שקובע אם להציג את הפופאפ או לא
//יימחק ברגע שתיהיה תשובה מהסרבר
export default function BookDetails() {
  const { popup, changePopupState } = useContext(dataContext);
  let book = { name: true };
  console.log('useContext',useContext(dataContext));
  const navigate = useNavigate();

  useEffect(() => {
    if (book.name) {
      changePopupState(true);
    } else {
      navigate("/train-reading/book-info");
    }
  },[]);
  return <div>TrainReading</div>;
}