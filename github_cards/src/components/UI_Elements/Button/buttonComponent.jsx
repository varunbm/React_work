import React from "react";

const ButtonComponent = (props) => {
  return <button className={props.class}>{props.label}</button>;
};

export default ButtonComponent;
