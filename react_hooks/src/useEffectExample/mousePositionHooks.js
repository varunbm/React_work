import React, { useState, useEffect } from "react";

function MousePositionHooks(props) {
  let obj = {
    x: 0,
    y: 0,
  };
  const [position, setPosition] = useState(obj);

  useEffect(() => {
    console.log(props.name);
    console.log("useEffect called");
    window.addEventListener("mousemove", mousePosHandler);
  }, []);

  let mousePosHandler = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div>
      X position - {position.x} and Y position - {position.y}
    </div>
  );
}

export default MousePositionHooks;
