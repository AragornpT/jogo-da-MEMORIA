// components/MoveCounter.js
import React from "react";

function MoveCounter({ moveCount }) {
  // Estilo em linha (inline)
  const styles = {
    position: "fixed", // Posiciona o componente em relação à janela do navegador
    top: "50%", // Centraliza o componente verticalmente na tela
    left: "15%", // (Opcional) Centraliza horizontalmente na tela, se desejado
    transform: "translate(-50%, -50%)", // Move o componente para o centro exato
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Fundo branco com transparência
    padding: "20px", // Espaçamento interno
    borderRadius: "8px", // Bordas arredondadas
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Sombra suave
    fontSize: "24px", // Tamanho da fonte
    zIndex: 100, // Garante que fique acima dos outros elementos
    color: "teal", // Cor do texto
    fontStyle: "italic", // Texto em itálico
    fontWeight: "bold", // Texto em negrito
    textAlign: "center", // Alinha o texto ao centro (se desejado)
  };

  return (
    <div style={styles}>
      <p>Jogadas: {moveCount}</p>
    </div>
  );
}

export default MoveCounter;
