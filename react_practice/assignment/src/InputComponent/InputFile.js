import React from 'react'

const InputFile = (props) => {
    const style = {
        border: '2px solid red'
    }
    return (
        <div>
            <p>From input component</p>
            <input style={style} type="text" onChange={props.change} value={props.currentName}/>
        </div>
    )
}

export default InputFile;