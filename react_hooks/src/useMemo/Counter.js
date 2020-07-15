import React, { useState, useMemo } from "react";

function Counter() {
  const [couner1, setCounter1] = useState(0);
  const [couner2, setCounter2] = useState(0);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return couner1 % 2 === 0;
  }, [couner1]);

  const incrementOne = () => {
    console.log("Counter1");
    setCounter1(couner1 + 1);
  };

  const incrementTwo = () => {
    console.log("Counter2");
    setCounter2(couner2 + 1);
  };

  return (
    <>
      <div>
        <button onClick={incrementOne}>Counter {couner1}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Counter {couner2}</button>
      </div>
    </>
  );
}

export default Counter;
