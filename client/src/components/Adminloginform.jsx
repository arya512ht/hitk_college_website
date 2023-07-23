import React, { useState } from "react";
import Main from "./Main";

import "./Adminloginform.css";

const y = {
  minHeight: "100vh",
  background: "linear-gradient(120deg, #ff966d, #fa538d, #89379c)",
};

const validUsers = [
  { username: "Soumyadeep", password: "185" },
  { username: "Arya", password: "204" },
  { username: "Tathagata", password: "205" },
  { username: "Saikat", password: "188" },
  // Add more valid username-password pairs as needed
];

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = username !== "" && password !== "";

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      const validUser = validUsers.find(
        (user) => user.username === username && user.password === password
      );

      if (validUser) {
        onLogin();
      } else {
        alert("Invalid credentials");
      }
    }
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div id="ghhh" className="container-fluid">
        <div
          className="row justify-content-center align-items-center"
          style={y}
        >
          <div className="col-lg-4 col-md-4 col-sm-8">
            <div className="box bg-white">
              <h4 className="text-center pt-2">ADMIN LOGIN</h4>
              <form id="loginForm">
                <hr />
                <div id="zxxx" className="container form pb-3">
                  <div className="row mb-3">
                    <div>
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your username"
                        id="exampleInputUsername233"
                        value={username}
                        onChange={handleUsernameChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 col-md-4 form-filed">
                      <div className="row">
                        <div>
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword23"
                            placeholder="Enter your password"
                            value={password}
                            onChange={handlePasswordChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" id="d">
                  <div className="col-12 d-flex justify-content-between pt8">
                    <div>
                      <input
                        className="form-control btn btn-primary ms-4 mb-2 mt-2"
                        type="submit"
                        id="fckf"
                        onClick={handleFormSubmit}
                        aria-label="Disabled input example"
                        disabled={!isFormValid}
                        value="Submit"
                      />
                      <button
                        type="button"
                        className="btn btn-danger ms-4 mb-2 mt-2"
                        id="fckff"
                        onClick={handleReset}
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Adminloginform({ onLogin }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return <>{!isLoggedIn ? <LoginForm onLogin={handleLogin} /> : <Main />}</>;
}

export default Adminloginform;
