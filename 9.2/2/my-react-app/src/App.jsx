import { useState, useEffect } from "react";

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

//mounting,re-renderinf,unmounting->lifecycle events

//we want only when it mounts
function Counter() {
  //let count=0;//cant take raw variable and put it in the dynamic part of the variable
  const [count, setCount] = useState(0); //when the state changes ,react rerenders the ->that means entire compoent is run again

  //hooking into the lifecycle of events of react
  console.log("inside the counter componenet ");

  /*
  setInterval(function () {
    setCount(count + 1);
  }, 1000);//the set interval should run only when counter component mounts
  */

  //guard our setintervals from re-renders
  //it hooks intot he lifecycle event

  useEffect(function () {
    setInterval(function () {
      setCount(count + 1); //setCount(count=>count+1)

      //another method
      setCount(function (currentValue) {
        //cant write count here as the dpeendcy array doesnt have count
        return currentValue + 1;
      });

      console.log("mounted"); //this makes sure it runs only once
    }, 1000);
  }, []); //no matter how many renders happen this code will only run once when its mounting
  //[] this is the dependency array

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
