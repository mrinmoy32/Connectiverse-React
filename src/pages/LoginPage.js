import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHttpClient } from "../hooks/http-hook";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import LoadingSpinner from "../components/common/LoadingSpinner";
import ErrorModal from "../components/common/ErrorModal";

function LoginPage() {
  const initialFormState = {
    username: "",
    password: "",
  };
  const navigate = useNavigate();
  const [formState, setFormState] = useState(initialFormState);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const responseData = await sendRequest(
        "http://demoyourprojects.com:5085/auth/signin",
        "POST",
        JSON.stringify({
          username: formState.username,
          password: formState.password,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      console.log(responseData.data.user);
      window.alert("login successful!");
      navigate("/user/profile/");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
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
            <input
              label="username"
              type="email"
              placeholder="Email address"
              required
              onChange={(event) => {
                setFormState({
                  ...formState,
                  username: event.target.value,
                });
              }}
            />
          </div>
          <div className="input-container">
            <input
              label="password"
              type="password"
              placeholder="Password"
              required
              onChange={(event) => {
                setFormState({
                  ...formState,
                  password: event.target.value,
                });
              }}
            />
          </div>
          <div className="action_login">
          <button className="login-button" onClick={loginHandler}>
            Log in
          </button>
          <Link className="switchToSignup" to="/signup">New user? Sign up instead</Link>
          </div>
        </form>
      </div>
    </div>
    </React.Fragment>
  );
}

export default LoginPage;
