import React, { useState } from "react";

function HookCounter2() {
  const [count, setCount] = useState(0);
  let incrementBy5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      Count : {count}
      <button onClick={() => setCount((prevState) => prevState + 1)}>+</button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={incrementBy5}>+5</button>
    </div>
  );
}

export default HookCounter2;
