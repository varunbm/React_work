import React, { useState, useEffect, useRef } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const inervalRef = useRef();
  useEffect(() => {
    inervalRef.current = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
    return () => {
      clearInterval(inervalRef.current);
    };
  }, [timer]);

  return (
    <div>
      {timer}
      <button
        onClick={() => {
          clearInterval(inervalRef.current);
        }}
      >
        Clear Interval
      </button>
    </div>
  );
}

export default HookTimer;
