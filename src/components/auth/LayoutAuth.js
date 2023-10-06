import React from "react";
import { resources } from "../../assets/resources";
import "./LayoutAuth.css";

const LayoutAuth = () => {
  const login = () => {
    window.location.href = "/dashboard";
  };
  return (
    <div
      className="maincontainer"
      style={{ backgroundImage: `url(${resources.bgAuth})` }}
    >
      <div className="blur-main">
        <div className="container">
          <div className="logocontainer">
            <img src={resources.logo} alt="logo" />
            <span className="logotext">XAcademic</span>
            <span className="logintext">Login</span>
          </div>
          <div className="formcontainer">
            <div className="form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={login}
                >
                  Login
                </button>
              </div>
            </div>
            <div className="form-footer">
              <span className="form-footer-text">
                Don't have an account? <a href="/signup">Sign up</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutAuth;
