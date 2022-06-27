import React from 'react'
import "./style.css"


// Team C - Missing form
const TextArea = (props) => {
    return (
        <div>
            <div className="form-group">
                <label>First name{props.children}</label>
                <input type="text" className="form-control" />
            </div>
        </div>
    )
}

export default TextArea
