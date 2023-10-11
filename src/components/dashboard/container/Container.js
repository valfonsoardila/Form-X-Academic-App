import React from "react";
import Header from "../header/Header";
import HomePage from "../../../pages/dashboard/home/HomePage";
import ProfilePage from "../../../pages/dashboard/profile/ProfilePage";
import "./Container.css";

const Container = ({activeComponent}) => {
  return (
    <div className="main-container-content">
      <Header />
      <div className="main-container-body">
        <div className="main-container-body-content">
          {activeComponent === "dashboard" && (
            <HomePage />
          )}
          {activeComponent === "profile" && (
            <ProfilePage />
          )}
        </div>
      </div>
    </div>
  );
};

export default Container;
