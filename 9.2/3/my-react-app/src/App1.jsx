import { useState, useEffect } from "react";

import "./App.css";

//useeffect,depenecyarray,cleanupd

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <Countern count={count} />
      <button onClick={increase}>Increase count</button>
      After Counter
    </div>
  );
}

//mounting,re-rendering,unmounting->lifecycle events

//code should run when state variable change->dependency array
function Counter(props) {
  useEffect(
    function () {
      console.log("on mount");

      return function () {
        console.log("unmount");
      };
    },

    [],
  );

  useEffect(function () {}, [props.count]);

  return <div>Counter {props.count}</div>; //we want some logic to run when the count variable changes
}

export default App;
