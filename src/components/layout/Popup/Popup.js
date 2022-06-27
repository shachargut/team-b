import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Popup.css';
// import styles from './style.module.css';


export default function Popup() {

    let nameBook = { name: "HarryPotter", gener: "roman" }

    const [popup, setPopup] = useState(true)
    const navigate = useNavigate()
    const yes = () => {
        setPopup(false)
        navigate('/instruction')
    }
    const no = () => {
        setPopup(false)
        navigate('/bookInfo')
    }

    return (
        <>
            <div
                className={`overlay ${popup ? '' : 'close'}`} >
                <div className='backpopup'>    </div>
                <div className='popup '>
                    <div className='title'>Reading Exercise</div>
                    <div className='txt'>Are you still reading {nameBook.name}?</div>
                    <div className='btn'>
                        <button className='btn_yes' onClick={() => yes()}>Yes</button>
                        <button className='btn_no' onClick={() => no()}  >No</button>
                    </div>
                </div>

            </div>




        </>
    )
}
