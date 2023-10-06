import React, { useState } from "react";
import "./Header.css";
import { resources } from "../../../assets/resources";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ backgroundColor, sectionRefs }) => {
  const [isHoveredFacebook, setIsHoveredFacebook] = useState(false);
  const [isHoveredInstagram, setIsHoveredInstagram] = useState(false);
  const [isHoveredWhatsapp, setIsHoveredWhatsapp] = useState(false);

  const handleNavigation = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleClick = () => {
    window.location.href = "/authentication";
  };

  const colorFacebook =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const colorWhatsapp =
    "linear-gradient(to right, #00bb2d 0%, #00ea38 40%, #6dd85c 100%)";
  const colorInstagram =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";

  const linkFacebook = () => {
    window.open("https://www.facebook.com/BlueCodeFullStack", "_blank");
  };

  const linkInstagram = () => {
    window.open("https://www.instagram.com/bluecode_full_stack/", "_blank");
  };

  const handleFacebookMouseEnter = () => {
    setIsHoveredFacebook(true);
  };

  const handleFacebookMouseLeave = () => {
    setIsHoveredFacebook(false);
  };
  const handleInstagramMouseEnter = () => {
    setIsHoveredInstagram(true);
  };

  const handleInstagrampMouseLeave = () => {
    setIsHoveredInstagram(false);
  };
  const handleWhatsAppMouseEnter = () => {
    setIsHoveredWhatsapp(true);
  };

  const handleWhatsAppMouseLeave = () => {
    setIsHoveredWhatsapp(false);
  };
  return (
    <div
      className="header-container"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="header-container__logo">
        <img src={resources.logo} alt="logo" />
        <span>Academic</span>
      </div>
      <div className="header-container__menu">
        <div className="header-container__menu__item">
          <div className="header-container__menu__divider" />
          <span
            className="header-container__menu__button"
            onClick={() => handleNavigation(sectionRefs.sectionOneRef)}
          >
            Inicio
          </span>
          <div className="header-container__menu__divider" />
          <span
            className="header-container__menu__button"
            onClick={() => handleNavigation(sectionRefs.sectionTwoRef)}
          >
            Producto
          </span>
          <div className="header-container__menu__divider" />
          <span
            className="header-container__menu__button"
            onClick={() => handleNavigation(sectionRefs.sectionThreeRef)}
          >
            Servicios
          </span>
          <div className="header-container__menu__divider" />
          <span
            className="header-container__menu__button"
            onClick={() => handleNavigation(sectionRefs.sectionFourRef)}
          >
            Ofertas
          </span>
          <div className="header-container__menu__divider" />
          <span
            className="header-container__menu__button"
            onClick={() => handleNavigation(sectionRefs.sectionFiveRef)}
          >
            Foro
          </span>
          <div className="header-container__menu__divider" />
        </div>
        <div className="header-container__menu__social">
          <div
            className="header-container__menu__social__item"
            onMouseEnter={handleFacebookMouseEnter}
            onMouseLeave={handleFacebookMouseLeave}
            style={{
              background: isHoveredFacebook
                ? colorFacebook
                : "rgba(255, 255, 255, 0.2)",
            }}
          >
            <div
              className="header-container__menu__social__item__button"
              onClick={linkFacebook}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </div>
          <div
            className="header-container__menu__social__item"
            onMouseEnter={handleInstagramMouseEnter}
            onMouseLeave={handleInstagrampMouseLeave}
            style={{
              background: isHoveredInstagram
                ? colorInstagram
                : "rgba(255, 255, 255, 0.2)",
            }}
          >
            <div
              className="header-container__menu__social__item__button"
              onClick={linkInstagram}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
          <div
            className="header-container__menu__social__item"
            onMouseEnter={handleWhatsAppMouseEnter}
            onMouseLeave={handleWhatsAppMouseLeave}
            style={{
              background: isHoveredWhatsapp
                ? colorWhatsapp
                : "rgba(255, 255, 255, 0.2)",
            }}
          >
            <div
              className="header-container__menu__social__item__button"
              onClick={linkFacebook}
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
          </div>
        </div>
        <div className="header-container__menu__login">
          <button className="glow-on-hover" type="button" onClick={handleClick}>
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
