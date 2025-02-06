import React, { useState } from "react";
import "../styles/CardDoor.css";
import hearts from '../pics/hearts.png'

function CardDoor() {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleKeyClick = () => {
    // Evitar disparar la animación si ya está en curso
    if (animate) {
      setOpen(false);
      setAnimate(false);
      return;
    }
    setAnimate(true);

    // Después de 800ms (duración del salto/animación), se abren las puertas
    setTimeout(() => {
      setOpen(!open);
    }, 800);

    // Limpiamos la animación (opcional, para permitir repetir la acción en otro momento)
    setTimeout(() => {
      setAnimate(false);
    }, 1500);
  };

  return (
    <div className="cardDoorContainer">
      <div className="upDoor" style={{ height: open ? "0%" : "50%" }}>
        <img src={hearts} className="heartsColgando" style={{left: '0'}} alt="corazones"/>
        <img src={hearts} className="heartsColgando" style={{right: '0'}} alt="corazones"/>
      </div>

      <div className="key-wrapper" style={{ top: open ? "10%" : "" }}>
        <div
          className={`key ${animate ? "animate" : ""}`}
          onClick={handleKeyClick}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/9389/9389158.png"
            alt="key"
          />
        </div>
        {animate && (
          <div className="hearts">
            <span
              className="heart"
              style={{ transform: "rotate(-45deg)", marginTop: "10px" }}
            >
              &#10084;
            </span>
            <span className="heart">&#10084;</span>
            <span
              className="heart"
              style={{ transform: "rotate(45deg)", marginTop: "10px" }}
            >
              &#10084;
            </span>
          </div>
        )}
      </div>

      <div className="downDoor" style={{ height: open ? "0%" : "50%" }}></div>
    </div>
  );
}

export default CardDoor;
