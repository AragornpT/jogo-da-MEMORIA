import React from "react";

const VictoryMessage = ({ onExit }) => {
  const styles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Fundo branco com transparência
    padding: "50px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    zIndex: 100, // Garante que este componente fique acima do tabuleiro
    color: "teal", // Cor do texto
    fontWeight: "bold", // Texto em negrito
  };

  return (
    <div style={styles}>
      <h1>Parabéns!</h1>
      <p>Você descobriu todos os pares.</p>
      <button onClick={onExit}>Exit</button>
    </div>
  );
};

export default VictoryMessage;
