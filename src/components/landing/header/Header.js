import React from "react";
import "./Header.css";
import { resources } from "../../../assets/resources";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ backgroundColor, sectionRefs }) => {
  const handleNavigation = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleClick = () => {
    window.location.href = "/Iniciar-sesion";
  };
  const colorFacebook =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const colorWhatsapp =
    "linear-gradient(to right, #00bb2d 0%, #00ea38 40%, #9CEC8F 100%)";
  const labelYouGym = "linear-gradient(to right, #B03535 0%, #201F1F 50%)";
  const colorInstagram =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const linkFacebook = () => {
    window.open("https://www.facebook.com/BlueCodeFullStack", "_blank"); // URL de la página de Facebook que deseas redireccionar
  };
  const linkInstagram = () => {
    window.open("https://www.instagram.com/bluecode_full_stack/", "_blank"); // URL de la página de Facebook que deseas redireccionar
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
            onClick={() => handleNavigation(sectionRefs[0])}
          >
            Inicio
          </span>
          <div className="header-container__menu__divider" />
          <span
            className="header-container__menu__button"
            onClick={() => handleNavigation(sectionRefs[0])}
          >
            Producto
          </span>
          <div className="header-container__menu__divider" />
          <span
            className="header-container__menu__button"
            onClick={() => handleNavigation(sectionRefs[0])}
          >
            Servicios
          </span>
          <div className="header-container__menu__divider" />
          <span
            className="header-container__menu__button"
            onClick={() => handleNavigation(sectionRefs[0])}
          >
            Ofertas
          </span>
          <div className="header-container__menu__divider" />
          <span
            className="header-container__menu__button"
            onClick={() => handleNavigation(sectionRefs[0])}
          >
            Foro
          </span>
          <div className="header-container__menu__divider" />
        </div>
        <div className="header-container__menu__social">
          <div className="header-container__menu__social__item">
            <div
              className="header-container__menu__social__item__button"
              style={{ color: colorFacebook }}
              onClick={linkFacebook}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </div>
          <div className="header-container__menu__social__item">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="header-container__menu__social__item">
            <FontAwesomeIcon icon={faWhatsapp} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
