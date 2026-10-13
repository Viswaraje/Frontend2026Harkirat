import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <b>Hi There</b>
      <Counter></Counter>
    </>
  );
}

//use the sentinterval fort he clock

function Counter() {
  //let count=0;//cant take raw variable and put it in the dynamic part of the variable
  const [count, setCount] = useState(0); //when the state changes ,react rerenders the ->that means entire compoent is run again

  console.log("inside the counter componenet ");
  setInterval(function () {
    setCount(count + 1);
  }, 1000);

  /*

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
nn
  */
  return (
    <diV>
      <h1 id="text">{count}</h1>
    </diV>
  );
}

export default App;
