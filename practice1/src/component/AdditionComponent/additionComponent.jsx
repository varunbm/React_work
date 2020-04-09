import React from "react";
import Button from "../UI_COmponent/Button/button";

const Addition = (props) => {
  return (
    <div>
      <p>Addition</p>
      <Button
        cls="btn btn-primary"
        name="Addition"
        onClick={props.click}
        value={props.increment}
      />
    </div>
  );
};

export default Addition;
