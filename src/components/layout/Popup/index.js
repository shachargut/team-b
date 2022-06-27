import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function Popup() {

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

    return <div
        className={`overlay ${popup ? '' : 'close'}`}
    >
        <div className='popup'>
            <button onClick={() => yes()}>yes</button>
            <button onClick={() => no()}  >No</button>
        </div>

    </div>
}
