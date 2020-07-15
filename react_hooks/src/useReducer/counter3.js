import React, { useReducer } from "react";
const initState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return initState;
    default:
      return state;
  }
};
function Counter3() {
  const [value, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      Value is -- {value}
      <button onClick={() => dispatch("inc")}>+</button>
      <button onClick={() => dispatch("dec")}>-</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default Counter3;
