import React from "react";
import cardBackImage from "../assets/carta.png"; // Importa a imagem da carta

// Componente de carta com animação de virar
const Card = ({ card, onClick, isFlipped }) => {
  // Estilos da carta no próprio componente
  const cardStyle = {
    width: "10vw", // Tamanho fixo da carta
    height: "30vh", // Tamanho fixo da carta
    perspective: "1000px", // Necessário para o efeito 3D
    cursor: "pointer",
    boxShadow: "0 0 15px rgba(0, 0, 255, 0.5)", // Aura azul ao redor da carta
    borderRadius: "10px",
  };

  const cardInnerStyle = {
    width: "100%",
    height: "100%",
    position: "relative",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
  };

  const cardFaceStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden", // Esconde o verso da carta
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
    fontWeight: "bold",
    color: "white", // Letra branca quando virada para cima
  };

  const cardFrontStyle = {
    ...cardFaceStyle,
    backgroundImage: `url(${cardBackImage})`, // Usa a imagem de fundo para cartas viradas para baixo
    backgroundSize: "cover", // Ajusta a imagem para cobrir a carta
    backgroundPosition: "center",
    color: "transparent", // Sem texto quando virada para baixo
  };

  const cardBackStyle = {
    ...cardFaceStyle,
    backgroundColor: "#2196f3", // Azul para cartas viradas para cima
    transform: "rotateY(180deg)",
    color: "white", // Letra branca quando virada para cima
  };

  return (
    <div style={cardStyle} onClick={() => onClick(card)}>
      <div style={cardInnerStyle}>
        <div style={cardFrontStyle}></div> {/* Imagem de fundo sem texto */}
        <div style={cardBackStyle}>{isFlipped ? card.value : ""}</div>{" "}
        {/* Fundo azul com letra */}
      </div>
    </div>
  );
};

export default Card;
