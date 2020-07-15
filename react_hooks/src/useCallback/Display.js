import React from "react";

function Display(props) {
  console.log("Display");
  return (
    <div>
      {props.text} - {props.display}
    </div>
  );
}

export default React.memo(Display);
