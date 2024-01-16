import { useState } from "react";
import "./App.css";
import { ChartSelector } from "./charts/ChartSelector";

function App() {
  const [chart, setChart] = useState("");

  const changeChart = (chartType) => {
    setChart(chartType);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          margin: "30px",
        }}
      >
        <button
          onClick={() => {
            changeChart("area");
          }}
        >
          Area Chart
        </button>
        <button
          onClick={() => {
            changeChart("bar");
          }}
        >
          Bar Chart
        </button>
        <button
          onClick={() => {
            changeChart("line");
          }}
        >
          Line Chart
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <ChartSelector chartType={chart} />
      </div>
    </div>
  );
}

export default App;
