
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

// Creator : Team B - Shahar
function BookInfo(props) {
    const navigate = useNavigate();
    const [book, setBook] = useState("");
    const bookRef = useRef();
    const genreRef = useRef();

    const insertBook = async () => {
        // console.log(bookRef.current.value);

        if (genreRef.current.value.trim().length == 0) {
            genreRef.current.focus();
        } else if (bookRef.current.value.trim().length == 0) {
            //  bookRef.current.className="invalid_data" // bookName"; // +="invald_data"; //classList.add
            bookRef.current.classList.add("invalid_data");
            bookRef.current.focus();
        } else {
            console.log("save in DB");
            let bookName = bookRef.current.value;
            let genre = genreRef.current.value;
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ bookName: bookName, genre: genre }),
            };
            // debugger;
            const res = await fetch(
                "http://localhost:3001/api/book/newbook",
                requestOptions
            );
            const data = await res.json();
            console.log(data);
            console.log(bookName);
            const nevigateObject = {
                bookName: bookName,
                genre: genre,
                roundCounter: 1,
            };
            navigate("/train-reading/instructions", { state: { nevigateObject } });
        }
        // return data;
    };
    // };

    return (
        <>
            <label htmlFor="bookName">what book are you going to read?</label>
            <input
                name="bookName"
                className={styles.bookName}
                placeholder="Type book name"
                ref={bookRef}
            ></input>
            <label htmlFor="genre">genre</label>
            <input
                name="genre"
                className={styles.genre}
                placeholder="History"
                ref={genreRef}
            ></input>

            <button className={styles.btnNext} onClick={insertBook}>
                next
            </button>
        </>
    );
}

export default BookInfo;