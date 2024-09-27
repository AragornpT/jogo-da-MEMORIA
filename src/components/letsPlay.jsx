import React from "react";

// Componente que exibe a imagem "Let's Play" sobre o tabuleiro
const LetsPlay = ({ onStart }) => {
  // Estilos do componente "Let's Play"
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  };

  const imageStyle = {
    maxWidth: "20%", // Controla o tamanho da imagem
    height: "auto",
    cursor: "pointer",
  };

  return (
    <div style={overlayStyle} onClick={onStart}>
      <img
        src="/src/assets/LetsPlays.png"
        alt="Let's Play"
        style={imageStyle}
      />
    </div>
  );
};

export default LetsPlay;
