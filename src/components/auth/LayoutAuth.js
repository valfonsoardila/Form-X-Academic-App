import React, { useState } from "react";
import "./LayoutAuth.css";
import { resources } from "../../assets/resources";
import LoginPage from "../../pages/auth/login/LoginPage";
import RegisterPage from "../../pages/auth/register/RegisterPage";
import ForgotPage from "../../pages/auth/forgot/ForgotPage";

const LayoutAuth = () => {
  const [activeComponent, setActiveComponent] = useState("login");
  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };
  return (
    <div
      className="maincontainer"
      style={{ backgroundImage: `url(${resources.bgAuth})` }}
    >
      <div className="blur-main">
        <div className="container">
          {activeComponent === "login" && (
            <LoginPage onComponentChange={handleComponentChange} />
          )}
          {activeComponent === "register" && (
            <RegisterPage onComponentChange={handleComponentChange} />
          )}
          {activeComponent === "forgot" && (
            <ForgotPage onComponentChange={handleComponentChange} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LayoutAuth;
