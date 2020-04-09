import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import HelloWorld from "./component/HelloWorldComponent/helloWorld";
import Addition from "./component/AdditionComponent/additionComponent";
import Display from "./component/DisplayComponent/displayComponent";

function App() {
  const [counter, setCounter] = useState(0);
  const additionHandler = (incrementValue) => {
    setCounter(counter + incrementValue);
  };
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />
        <Addition click={() => additionHandler(1)} increment={1} />
        <Addition click={() => additionHandler(10)} increment={10} />
        <Addition click={() => additionHandler(25)} increment={25} />
        <Addition click={() => additionHandler(50)} increment={50} />
        <Addition click={() => additionHandler(100)} increment={100} />
        <Display result={counter} />
      </header>
    </div>
  );
}

export default App;
