import React from "react";
import { useRef, useState } from "react";
function Counterref() {
  const [count, setCount] = useState(0);
  const timer = useRef(null);
  console.log(timer);
  function increment() {
    timer.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 200);
  }
  function decrement() {
    timer.current = setInterval(() => {
      setCount((count) => count - 1);
    }, 200);
  }
  //   console.log(timer.current);
  function timeoutclear() {
    clearInterval(timer.current);
    // console.log(timer.current);
  }
  return (
    <div>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
        onMouseDown={() => {
          decrement();
        }}
        onMouseUp={() => {
          timeoutclear();
        }}
        onMouseLeave={() => {
          timeoutclear();
        }}
      >
        -
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        onMouseDown={() => {
          increment();
        }}
        onMouseUp={() => {
          timeoutclear();
        }}
        onMouseLeave={() => {
          timeoutclear();
        }}
      >
        +
      </button>
    </div>
  );
}

export default Counterref;
