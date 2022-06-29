import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {popupContext} from "../../context/context";
//---------
//זמני לאתחול הדגל שקובע אם להציג את הפופאפ או לא
//יימחק ברגע שתיהיה תשובה מהסרבר
export default function BookDetails() {
  const { popup, setPopup } = useContext(popupContext);
  let book = { name: true };
  const navigate = useNavigate();

  useEffect(() => {
    if (book.name) {
      setPopup(true);
    } else {
      navigate("/train-reading/book-info");
    }
  });
  return <div>TrainReading</div>;
}