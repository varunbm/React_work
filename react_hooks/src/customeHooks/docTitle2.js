import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function DocTitle2() {
  const [Counter, setCounter] = useState(0);

  let handler = () => {
    setCounter(Counter + 1);
  };
  useDocumentTitle(Counter);
  return (
    <div>
      <button onClick={handler}>Click {Counter}</button>
    </div>
  );
}

export default DocTitle2;
