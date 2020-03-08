import React from 'react'
import './UserOutput.css'

const OutputFile = (props) => {
    return (
        <div className='UserOutput'>
            <p>User name: {props.userName}</p>
            <p>Some more randome text</p>
        </div>
    )
}

export default OutputFile;