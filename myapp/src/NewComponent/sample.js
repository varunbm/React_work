import React from 'react';

import './Styling.css'

const Person = (props) => {
return (
    <div className='PersonDetail'>
        <p onClick={props.click}>My name is {props.name} and I am {props.age} years old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name}></input>
    </div>
  )
};

export default Person;