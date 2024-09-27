import React from "react";

// Componente do Menu sempre visível com "Start Game", "Top Scores" e "Login"
const Menu = ({ onStart, onExit, gameStarted, countdown }) => {
  // Estilos do menu dentro do componente
  const menuStyle = {
    position: "fixed",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "80%",
    backgroundColor: "rgba(173, 216, 230, 0.9)", // Azul claro com transparência
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Efeito de sombra
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
  };

  const ulStyle = {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
  };

  const buttonStyle = {
    background: "none",
    border: "none",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    padding: "10px 20px",
  };

  const countdownStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center", // Centraliza o texto
  };

  return (
    <nav style={menuStyle}>
      {/* Botão de "Start Game" ou "Exit Game" */}
      <ul style={ulStyle}>
        <li>
          <button style={buttonStyle} onClick={gameStarted ? onExit : onStart}>
            {gameStarted ? "Exit Game" : "Start Game"}
          </button>
        </li>
      </ul>

      {/* Texto do contador (Centralizado) */}
      <div style={countdownStyle}>
        {gameStarted ? (
          countdown > 0 ? (
            <span>Memorize as Cartas: {countdown} segundos</span>
          ) : (
            <span>O jogo começou!</span>
          )
        ) : null}
      </div>

      {/* Botões "Top Scores" e "Login" */}
      <ul style={ulStyle}>
        <li>
          <button style={buttonStyle}>Top Scores</button>
        </li>
        <li>
          <button style={buttonStyle}>Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
