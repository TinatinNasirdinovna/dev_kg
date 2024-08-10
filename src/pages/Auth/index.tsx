import axios from "axios";
import React, { useState } from "react";
import Cookies from "js-cookie";

const Auth = () => {
  const loginApi = "http://3.38.98.134/auth/login";
  const sighUpApi = "http://3.38.98.134/auth/signup";
  const [userName, setUserName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirm, setConfirm] = React.useState<string>("");
  const [isLoginTab, setIsLoginTab] = React.useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !password) {
      alert("Please, fill the  fields!");
    }
    if (!isLoginTab && password !== confirm) {
      alert("Password do not match");
    }
    const authUrl = isLoginTab ? loginApi : sighUpApi;
    try {
      axios
        .post(authUrl, {
          userName,
          password,
        })
        .then((res) => {
          const { token, message } = res.data;
          if (res.data.succes) {
            console.log("data", res.data);
            Cookies.set;
            alert(message);
          } else {
            alert(message);
          }
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="auth">
      <div className="container">
        <div className="auth">
          <form onSubmit={handleSubmit}>
            <h1>{isLoginTab ? "Login" : "Sign Up"}</h1>
            <div className="auth--content">
              <input
                type="text"
                placeholder="Email"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                value={password}
                type="text"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {!isLoginTab && (
                <input
                  value={confirm}
                  type="text"
                  placeholder="Confirm password"
                  onChange={(e) => setConfirm(e.target.value)}
                />
              )}
              <button>{isLoginTab ? "Login" : "Sign Up"}</button>

              {isLoginTab ? (
                <div className="auth--content__register">
                  <p>Do not have an account?</p>
                  <button
                    className="auth--content__register--btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsLoginTab(false);
                    }}
                  >
                    SignUp
                  </button>
                </div>
              ) : (
                <div className="auth--content__register">
                  <p>Already have an account?</p>
                  <button
                    className="auth--content__register--btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsLoginTab(true);
                    }}
                  >
                    Login
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
