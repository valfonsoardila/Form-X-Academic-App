import React, { useState } from "react";
import Header from "../header/Header";
import "./Container.css";

const Container = () => {
  return (
    <div className="main-container-content">
      <Header />
      <div className="main-container-body">
        <div className="main-container-body-content"></div>
      </div>
    </div>
  );
};

export default Container;
