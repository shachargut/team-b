// import { useState, useRef } from 'react'
// import { useNavigate } from 'react-router-dom';
// import styles from './style.module.css';




// // Creator : Team B - Shahar
// function BookInfo() {
//     const [bookName, setBookName] = useState("")
//     const [genre, setGenre] = useState("")
//     const navigate = useNavigate()
//     const inputBookName = useRef();

//     const insertBook = async () => {
//         debugger
//         console.log(inputBookName.current.value);
//         debugger;
//         if (genre.trim().length == 0) {

//             console.log(bookName)
//             console.log(genre)
//             navigate('/instruction')
//         }
//         else { console.log("input error"); }

//         // const requestOptions = {
//         //   method: "POST",
//         //   headers: { "Content-Type": "application/json" },
//         //   body: JSON.stringify({bookName, genre}),
//         // };
//         // const res = await fetch(
//         //   "http://localhost:3030/api/users/login",
//         //   requestOptions
//         // );
//         // const data = await res.json();

//         // } 
//         // return data;
//     };


//     return <>

//         <label for="bookName">what book are you going to read?</label>
//         {/* <input name='bookName' className={styles.bookName} placeholder='Type book name' required value={bookName} onInput={(e) => { setBookName(e.target.value) }}></input> */}
//         <input name='bookName' className={styles.bookName} placeholder='Type book name' ref={inputBookName}></input>
//         <label for="genre">genre</label>
//         <input name='genre' className={styles.genre} placeholder='History' required value={genre} onInput={(e) => { setGenre(e.target.value) }}></input>

//         <button className='btnNext' onClick={insertBook}>next</button>

//     </>
// }


// export default BookInfo


import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import SubmitBtn from '../../../components/common/SubmitBtn';
import Input from '../../../components/common/InputValid'

// Creator : Team B - Shahar
function BookInfo(props) {
    const navigate = useNavigate();
    const [bookName, setBookName] = useState("");
    const [genre, setGenre] = useState("");

    const [bookValid, setBookValid] = useState(true)
    const [ganerValid, setGenreValid] = useState(true)


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

            <div className={styles.bookInfo}>
                <Input label="what book are you going to read?" type="text" placeholder="Type book name" value={bookName} valid={bookValid} onInput={(e) => { setBookValid(true); setBookName(e.target.value) }} />
                <Input   label="genre" type="text" placeholder="Type book genre" value={genre} valid={ganerValid} onInput={(e) => { setGenreValid(true); setGenre(e.target.value) }} />

            </div>
            <SubmitBtn type="button" name="next" click={insertBook} />

        </>
    );
}

export default BookInfo;