import React from "react";
import "./Card.css";

const Card = ({ card, onClick, isFlipped }) => {
  return (
    <div className="card" onClick={() => onClick && onClick(card)}>
      <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="card-front">
          {isFlipped ? card.value : ""}{" "}
          {/* Exibe o valor da carta se estiver virada para cima */}
        </div>
        <div className="card-back">?</div> {/* Mostra "?" no verso */}
      </div>
    </div>
  );
};

export default Card;
