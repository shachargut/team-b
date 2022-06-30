import { useState, useRef, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./style.module.css";
import SubmitBtn from '../../../components/common/SubmitBtn';
import Input from '../../../components/common/InputValid'
import { dataContext } from "../../../components/../context/context";
// Creator : Team B - Shahar
function BookInfo(props) {
    const location = useLocation();
    const nevigateObject = location.state.nevigateObject
    const { pageName, changePageName } = useContext(dataContext);
    const navigate = useNavigate();
    const [bookName, setBookName] = useState("");
    const [genre, setGenre] = useState("");

    const [bookValid, setBookValid] = useState(true)
    const [ganerValid, setGenreValid] = useState(true)
    useEffect(()=>{
        changePageName("Book Info")
    },[])

    function insertBook() {
        console.log("enter");
        console.log(bookName);
        if (bookName.trim().length == 0) {
            setBookValid(false)

        } else if (genre.trim().length == 0) {
            setGenreValid(false)
        } else {
            console.log("save in DB");
            // let bookName = bookRef.current.value;
            // let genre = genreRef.current.value;
            // const requestOptions = {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({ bookName: bookName, genre: genre }),
            // };
            // debugger;
            // const res = await fetch(
            //     "http://localhost:3001/api/book/newbook",
            //     requestOptions
            // );
            // const data = await res.json();
            // console.log(data);
            // console.log(bookName);
            nevigateObject.bookName=bookName;
            nevigateObject.genre=genre;
            const nevigateObject = {
                bookName: bookName,
                genre: genre,
                roundCounter: 1,
                lpm:11,
                formInfo:{},
                rateData:{
                  LPM:0,
                  newLPM: 0,
                round:0,
                justRight: false
                }}
            navigate("/train-reading/instructions", { state: { nevigateObject } });

        }
        // return data;
    };
    // };

    return (
        <>

            <div className={styles.bookInfo}>
                <Input label="what book are you going to read?" type="text" placeholder="Type book name" value={bookName} valid={bookValid} onInput={(e) => { setBookValid(true); setBookName(e.target.value) }} />
                <Input   label="genre" type="text" placeholder="Type book genre" value={genre} valid={ganerValid} onInput={(e) => { setGenreValid(true); setGenre(e.target.value) }} />

            </div>
            <SubmitBtn type="button" name="next" click={insertBook} />

        </>
    );
}

export default BookInfo;