import React from "react";

function Button(props) {
  console.log(`Button ${props.children}`);
  return (
    <div>
      <button onClick={props.handle}>{props.children}</button>
    </div>
  );
}

export default React.memo(Button);
