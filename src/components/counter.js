import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  let [count, setCount] = useState(0);

  const handleIncrementCount = () => {
    let currentCount = count;
    if (count >= 5) {
      return count;
    }
    currentCount++;
    setCount(currentCount);
    console.log(count);
  };

  // const handleDecrementCount = () => {
  //   let currentCount = count;
  //   if (count <= -5) {
  //     return count;
  //   }
  //   currentCount--;
  //   setCount(currentCount);
  //   console.log(count);
  // };

  return (
    <div class="counter_wrapper">
      <h3>Counter</h3>
      <p>{count}</p>
      <button onClick={handleIncrementCount}>Count Up</button>
      <button onClick={() => setCount(count - 1)}>Count Down</button>
    </div>
  );
};

export default Counter;
