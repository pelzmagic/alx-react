import React from "react";
import "./Login.css";

function Login() {
  return (
    <main role="main" className="login">
      <p>Login to access the full dashboard</p>
      <section className="form-inputs">
        <section className="input">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
          />
        </section>
        <section className="input">
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" />
        </section>
        <button>OK</button>
      </section>
    </main>
  );
}

export default Login;