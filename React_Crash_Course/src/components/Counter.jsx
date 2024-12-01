import React, { useState } from "react";

const Counter = () => {
  //   let counter = 0;

  const [counter, setCounter] = useState();

  const increase = () => {
    // counter++;
    // console.log(counter);

    setCounter(counter + 1);
  };
  const decrease = () => {
    // counter--;
    setCounter(counter - 1);
    console.log(counter);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default Counter;
