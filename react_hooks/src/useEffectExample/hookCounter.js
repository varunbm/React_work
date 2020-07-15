import React, { useState, useEffect } from "react";

function HookCounter() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  let increment = () => {
    setCounter((prevState) => prevState + 1);
  };

  useEffect(() => {
    console.log("Useeffect");
    document.title = `You clicked ${counter} times`;
  }, [counter]);

  let onChangenameHandler = (e) => {
    console.log(e.target.name);
    setName(e.target.value);
  };

  return (
    <div>
      <button onClick={increment}>Clicked {counter}</button>
      <input
        type="text"
        value={name}
        name={name}
        onChange={onChangenameHandler}
      />
    </div>
  );
}

export default HookCounter;
