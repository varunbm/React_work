import React from "react";

const ChildComp = (props) => {
  return (
    <div>
      <button onClick={props.greetHandler}>Click</button>
    </div>
  );
};

export default ChildComp;
