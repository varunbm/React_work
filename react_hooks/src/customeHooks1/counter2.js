import React from "react";
import useCounter from "./useCounter";

function Counter2() {
  const [counter, increment, decrement, reset] = useCounter();
  return (
    <div>
      Counter - {counter}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter2;
