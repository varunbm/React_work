import React, { useReducer } from "react";

const initState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + action.payload };
    case "decrement":
      return { firstCounter: state.firstCounter - action.payload };
    case "reset":
      return initState;
    default:
      return state;
  }
};

function Counter2() {
  const [value, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      Count Value - {value.firstCounter}
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Counter2;
