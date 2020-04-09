import React from "react";

const Button = (props) => {
  return (
    <button className={props.cls} onClick={props.onClick}>
      {props.name} + {props.value}
    </button>
  );
};

export default Button;
