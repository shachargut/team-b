import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import popupContext from '../../context/popupContext'

export default function TrainReading() {
    const { popup, setPopup } = useContext(popupContext)
    let book = { name: true }
    const navigate = useNavigate()

    useEffect(() => {
        if (book.name) {
            setPopup(true)
        } else {
            navigate('/train-reading/book-info')

        }
    })
    return (
        <div>TrainReading</div>
    )
}
