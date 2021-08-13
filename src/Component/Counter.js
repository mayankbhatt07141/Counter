import React from "react";
import "./Counter.css";
import { useState, useEffect, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [longpressPlus, setLongpressPlus] = useState(false);
  const [longpressMinus, setLongpressMinus] = useState(false);
  useEffect(() => {
    console.log("use");
    if (longpressMinus) {
      var x = setInterval(function () {
        setCount(count - 1);
      }, 200);
    } else if (longpressMinus === false) {
      clearTimeout(x);
    }

    if (longpressPlus) {
      var y = setInterval(function () {
        setCount(count + 1);
      }, 200);
    } else if (!longpressPlus) {
      clearTimeout(y);
    }

    return () => {
      clearTimeout(x);
      clearTimeout(y);
    };
  });
  // useEffect(() => {

  //   return () => {
  //     clearTimeout(x);
  //   };
  // });

  return (
    <div>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
        onMouseDown={() => {
          setLongpressMinus(true);
        }}
        onMouseUp={() => {
          setLongpressMinus(false);
        }}
        onMouseLeave={() => {
          setLongpressMinus(false);
        }}
        onTouchStart={() => setLongpressMinus(true)}
        onTouchEnd={() => setLongpressMinus(false)}
      >
        -
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        onMouseDown={() => {
          setLongpressPlus(true);
        }}
        onMouseUp={() => {
          setLongpressPlus(false);
        }}
        onMouseLeave={() => {
          setLongpressPlus(false);
        }}
        onTouchStart={() => setLongpressPlus(true)}
        onTouchEnd={() => setLongpressPlus(false)}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
