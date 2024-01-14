import "./App.css";
import { Counter } from "./components/counter/Counter";
import { Login } from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <Counter initialCount={0} />
      {/* <Login /> */}
    </div>
  );
}

export default App;
