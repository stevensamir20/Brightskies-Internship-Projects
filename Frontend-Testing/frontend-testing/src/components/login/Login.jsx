import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-3">
        <label htmlFor="formEmail">Email</label>
        <input
          type="email"
          id="formEmail"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="formPassword">Password</label>
        <input
          type="password"
          id="formPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button data-testid="submit" type="submit">
        Submit
      </button>
      <button
        type="button"
        data-testid="reset"
        onClick={resetForm}
        style={{ backgroundColor: "gray", color: "white", marginLeft: "5px" }}
      >
        Reset
      </button>
    </form>
  );
};
