import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
// import styles from './style.module.css';


export default function Popup() {
    const [data, setData] = useState("")
    const [loading, setLoading] = useState(true)
    const [popup, setPopup] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        async function getBook() {

            const url = "http://localhost:3001/api/book/book";
            const res = await fetch(url);
            const data = await res.json();

            setData(data)
            // debugger;
            setLoading(false)
            if (data.length == 0) {
                console.log("no data")
                navigate('/train-reading/book-info')

            }
            else {
                setPopup(true)
                console.log(data);
            }






        }
        getBook()
    }, [])
    console.log(data);
    if (loading) {
        return <div></div>
    }
    console.log(data);

    // let book = { name: "HarryPotter", genre: "roman" }

    let bookName = data.bookName
    let genre = data.genre

    const nevigateObject = {
        bookName: bookName,
        genre: genre,
        roundCounter: 1,
    };

    const yes = () => {
        setPopup(false)
        navigate('/train-reading/instructions', { state: { nevigateObject } })
    }
    const no = () => {
        setPopup(false)
        navigate('/train-reading/book-info')
    }

    return (

        <>
            <div
                className={`overlay ${popup ? '' : 'close'}`} >
                <div className='backpopup'>    </div>
                <div className='popup '>
                    <div className='title'>Reading Exercise</div>
                    <div className='txt'>Are you still reading {bookName}?</div>
                    <div className='btn'>
                        <button className='btn_yes' onClick={() => yes()}>Yes</button>
                        <button className='btn_no' onClick={() => no()}  >No</button>
                    </div>
                </div>

            </div>




        </>
    )
}
