import React, { useState, useEffect } from "react";

function DocTitle1() {
  const [couner, setCounter] = useState(0);

  let clickHandler = () => {
    setCounter(couner + 1);
  };

  useEffect(() => {
    console.log("****");
    document.title = `Count ${couner}`;
  }, [couner]);

  return (
    <div>
      <button onClick={clickHandler}>Count - {couner}</button>
    </div>
  );
}

export default DocTitle1;
