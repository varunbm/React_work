import React from 'react'

const Validation = (props) => {
    let validationMessage = 'Text Too short';

    if(props.length > 5){
        validationMessage = 'Text long enough';
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )
}

export default Validation;