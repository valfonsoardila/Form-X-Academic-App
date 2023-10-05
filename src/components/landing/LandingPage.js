import React, { useState, useEffect, useRef } from "react";
import { resources } from "../../assets/resources";
import Header from "../landing/header/Header";
import Footer from "../landing/footer/Footer";
import "./LandingPage.css";

const LandingPage = () => {
  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const sectionThreeRef = useRef(null);
  const sectionFourRef = useRef(null);
  const sectionFiveRef = useRef(null);

  const [headerBackground, setHeaderBackground] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 80) {
        setHeaderBackground("rgba(51, 51, 51, 0.7)");
      } else {
        setHeaderBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="maincontainer"
      style={{ backgroundImage: `url(${resources.bg})` }}
    >
      <div className="container__landing">
        <Header backgroundColor={headerBackground} />
        <div className="contanersections">
          <div className="sectionOne" ref={sectionOneRef}></div>
          <div className="sectionTwo" ref={sectionTwoRef}></div>
          <div className="sectionThree" ref={sectionThreeRef}></div>
          <div className="sectionFour" ref={sectionFourRef}></div>
          <div className="sectionFive" ref={sectionFiveRef}></div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
