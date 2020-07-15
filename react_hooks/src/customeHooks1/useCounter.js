import { useState } from "react";

function useCounter() {
  const [counter, setCounter] = useState(0);
  let increment = () => {
    setCounter(counter + 1);
  };
  let decrement = () => {
    setCounter(counter - 1);
  };
  let reset = () => {
    setCounter(0);
  };

  return [counter, increment, decrement, reset];
}

export default useCounter;
