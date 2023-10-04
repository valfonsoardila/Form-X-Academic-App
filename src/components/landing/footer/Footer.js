import React from "react";
import "./Footer.css";
import { resources } from "../../../assets/resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container__left">
          <div className="footer__container__left__logo">
            <img src={resources.innobyte} alt="logo" />
            <span>© 2021 Innobyte</span>
          </div>
          <div className="footer__container__left__name">
            <span>By Victor Ardila</span>
          </div>
        </div>
        <div className="footer__container__center">
          <div className="footer__container__center__title">
            <span>Contactos</span>
          </div>
          <div className="footer__container__center__content">
            <div className="footer__container__center__content__item">
              <div className="footer__container__center__content__item__google">
                <FontAwesomeIcon icon={faGoogle} />
                <span>Correo</span>
              </div>
              <div className="footer__container__center__content__item__linkedin">
                <FontAwesomeIcon icon={faLinkedin} />
                <span>Linkedin</span>
              </div>
              <div className="footer__container__center__content__item__whatsapp">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span>Whatsapp</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__container__right">
          <div className="footer__container__right__title">
            <span>Información</span>
          </div>
          <div className="footer__container__right__content">
            <div className="footer__container__right__content__item">
              <span>Política de privacidad</span>
            </div>
            <div className="footer__container__right__content__item">
              <span>Política de cookies</span>
            </div>
            <div className="footer__container__right__content__item">
              <span>Condiciones de uso</span>
            </div>
            <div className="footer__container__right__content__item">
              <span>Política de devoluciones</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
