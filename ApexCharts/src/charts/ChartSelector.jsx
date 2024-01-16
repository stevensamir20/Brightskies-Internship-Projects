import { AreaChart } from "./AreaChart";
import { BarChart } from "./BarChart";
import { LineChart } from "./LineChart";

export const ChartSelector = ({ chartType }) => {
  switch (chartType) {
    case "area":
      return <AreaChart />;
    case "bar":
      return <BarChart />;
    case "line":
      return <LineChart />;
    default:
      return <h1>Please select a chart type</h1>;
  }
};
