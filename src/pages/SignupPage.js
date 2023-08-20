import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHttpClient } from "../hooks/http-hook";
import "./SignupPage.css";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/common/LoadingSpinner";
import ErrorModal from "../components/common/ErrorModal";

function SignupPage() {
  const initialFormState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const navigate = useNavigate();
  const [formState, setFormState] = useState(initialFormState);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const signupHandler = async (event) => {
    event.preventDefault();
    try {
      const responseData = await sendRequest(
        "http://demoyourprojects.com:5085/auth/signup",
        "POST",
        JSON.stringify({
          name: formState.name,
          email: formState.email,
          password: formState.password,
          confirm_password: formState.confirmPassword,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      console.log(responseData.data.user);
      window.alert("Signup successful!");
      navigate("/user/profile/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      <div className="signup-page">
        <div className="singup__left-section">
          <div className="signup-text">
            <h1>Join Connectiverse</h1>
            <p>Create your account and connect with others</p>
          </div>
        </div>
        <div className="signup__right-section">
          <form className="signup-form">
            <h2>Welcome aboard</h2>
            <div className="input-container">
              <input
                label="name"
                type="text"
                placeholder="Name"
                required
                onChange={(event) => {
                  setFormState({
                    ...formState,
                    name: event.target.value,
                  });
                }}
              />
            </div>
            <div className="input-container">
              <input
                label="email"
                type="email"
                placeholder="Email address"
                required
                onChange={(event) => {
                  setFormState({
                    ...formState,
                    email: event.target.value,
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
            <div className="input-container">
              <input
                label="confirmPassword"
                type="password"
                placeholder="Confirm password"
                required
                onChange={(event) => {
                  setFormState({
                    ...formState,
                    confirmPassword: event.target.value,
                  });
                }}
              />
            </div>
            <button className="signup-button" onClick={signupHandler}>
              Sign up
            </button>
            <Link to="/login">Already have an account? plesae login</Link>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignupPage;
