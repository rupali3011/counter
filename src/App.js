import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [inccount, setinccount] = useState(0);
  function increment() {
    setinccount(inccount + 1);
  }
  const count = inccount;
  function decrement() {
    setinccount(count - 1);
  }
  return (
    <div className="App">
      <h2>{inccount}</h2>
      <button onClick={increment}>incbutton</button>
      <button onClick={decrement}>decbutton</button>
    </div>
  );
}
