import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'; // Import the CSS file for styling

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login__left-section">
        <div className="login-text">
          <h1>Login to Connectiverse</h1>
          <p>Join the community and stay connected</p>
        </div>
      </div>
      <div className="login__right-section">
        <form className="login-form">
          <h2>Welcome back</h2>
          <div className="input-container">
            <input type="email" placeholder="Email address" />
          </div>
          <div className="input-container">
            <input type="password" placeholder="Password" />
          </div>
          <button className="login-button">Log in</button>
          <Link to="/signup">New user? Sign up instead</Link>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
