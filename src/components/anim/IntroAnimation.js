import React, { useEffect, useState } from "react";
import "./IntroAnimation.css";
import { resources } from "../../assets/resources";

const IntroAnimation = () => {
  const words = ["Bienvenido", "Continuar", "↵"]; // Lista de palabras
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);


  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = words.indexOf(currentWord);
      const nextIndex = (currentIndex + 1) % words.length;
      setIsTransitioning(true);

      setTimeout(() => {
        setIsTransitioning(false);
        setTimeout(() => {
          setCurrentWord(words[nextIndex]);
        }, 100); // Agregamos un pequeño retraso antes de cambiar la palabra para asegurar la animación de desvanecimiento
      }, 500);

    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentWord, words]);

  function handleOnClick() {
    window.location.href = "/landing";
  }
  
  return (
    <div className="background">
      <div className="container">
        <div className="logo">
          <img src={resources.logo} alt="logo" />
        </div>
        <h2>X Academic</h2>
        <span>La mejor forma de entender tus ideas</span>
        <div class="content">
          <div className="content__container">
          <span className={`transition ${isTransitioning ? "fade-out" : ""}`} onClick={handleOnClick}>
              {currentWord}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
