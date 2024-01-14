import { useState } from "react";
import "./App.css";
import Button from "remoteApp/Button";
import { Add, Subtract, Multiply, Divide } from "remoteApp/Utils";

function App() {
  const [count, setCount] = useState(0);
  const [inputOne, setInputOne] = useState(0);
  const [inputTwo, setInputTwo] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div className="App">
      <Button />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count From Host {count}
        </button>
      </div>
      <div>
        <input
          onChange={(e) => setInputOne(+e.target.value)}
          value={inputOne}
          type="number"
        />
        <input
          onChange={(e) => setInputTwo(+e.target.value)}
          value={inputTwo}
          type="number"
        />
        <button onClick={() => setResult(Add(inputOne, inputTwo))}>Add</button>
        <button onClick={() => setResult(Subtract(inputOne, inputTwo))}>
          Subtract
        </button>
        <button onClick={() => setResult(Multiply(inputOne, inputTwo))}>
          Multiply
        </button>
        <button onClick={() => setResult(Divide(inputOne, inputTwo))}>
          Divide
        </button>
        <div>Result: {result}</div>
      </div>
    </div>
  );
}

export default App;
