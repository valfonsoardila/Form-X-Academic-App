import React, { useState } from "react";
import Header from "../header/Header";
import "./Container.css";

const Container = ({ children }) => {
  return (
    <div className="main-container-content">
      <Header />
      <div className="main-container-body">
        <div className="main-container-body-content">{children}</div>
      </div>
    </div>
  );
};

export default Container;
