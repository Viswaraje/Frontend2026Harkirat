import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Post />
    </>
  );
}

function Post() {
  return (
    <div
      style={{
        width: 200,
        backgroundColor: "white",
        borderRadius: 10,
        borderColor: "red",
        borderWidth: 1,
      }}
    ></div>
  );
}

export default App;
