import React from "react";

const InputComponent = (props) => {
  return (
    <input
      type={props.type}
      // ref={props.reff}
      value={props.valu}
      onChange={props.on_change_}
      placeholder={props.placeholder}
    />
  );
};

export default InputComponent;
