import { useState } from "react";
import "./App.css";

export const CounterApp = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = (e) => {
    e.preventDefault();
    setCount((prev) => prev + 1);
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    setCount((prev) => prev - 1);
  };

  return (
    <div className="App">
      <div style={{backgroundColor:"WindowFrame",padding:"25px 20px",borderRadius:"20px"}}>
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};
