import React, { useState } from "react";
import { resources } from "../../assets/resources";
import Hader from "../landing/header/Header";
import Footer from "../landing/footer/Footer";
import "./LandingPage.css";

const LandingPage = () => {
  const [headerBackground, setHeaderBackground] = useState("transparent");
  return (
    <div
      className="maincontainer"
      style={{ backgroundImage: `url(${resources.bg})` }}
    >
      <div className="container">
        <Hader backgroundColor={headerBackground} />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
