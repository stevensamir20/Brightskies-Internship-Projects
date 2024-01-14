import { useState } from "react";
import "./Button.css";

export const Button = () => {
  const [state, setState] = useState(0);

  return (
    <button className="shared-btn" onClick={() => setState((s) => s + 1)}>
      Count from Remote: {state}
    </button>
  );
};

export default Button;
