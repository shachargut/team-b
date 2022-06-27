import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';




// Creator : Team B - Shahar
function BookInfo() {
    const [bookName, setBookName] = useState("")
    const [genre, setGenre] = useState("")
    const navigate = useNavigate()
    const inputBookName = useRef();

    const insertBook = async () => {
        debugger
        console.log(inputBookName.current.value);
        debugger;
        if (genre.trim().length == 0) {

            console.log(bookName)
            console.log(genre)
            navigate('/instruction')
        }
        else { console.log("input error"); }

        // const requestOptions = {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({bookName, genre}),
        // };
        // const res = await fetch(
        //   "http://localhost:3030/api/users/login",
        //   requestOptions
        // );
        // const data = await res.json();

        // } 
        // return data;
    };


    return <>

        <label for="bookName">what book are you going to read?</label>
        {/* <input name='bookName' className={styles.bookName} placeholder='Type book name' required value={bookName} onInput={(e) => { setBookName(e.target.value) }}></input> */}
        <input name='bookName' className={styles.bookName} placeholder='Type book name' ref={inputBookName}></input>
        <label for="genre">genre</label>
        <input name='genre' className={styles.genre} placeholder='History' required value={genre} onInput={(e) => { setGenre(e.target.value) }}></input>

        <button className='btnNext' onClick={insertBook}>next</button>

    </>
}


export default BookInfo