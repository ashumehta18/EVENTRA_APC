import React from "react";
import "./../style.css";

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login to Eventra</h2>
        <form>
          <input type="email" placeholder="Email Address" className="auth-input" required />
          <input type="password" placeholder="Password" className="auth-input" required />
          <button type="submit" className="auth-btn">Login</button>
        </form>
        <p className="auth-link">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
