import React from "react";

const Countdown = ({ countdown }) => {
  const countdownStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "5px", // Reduzido para ocupar menos espaço
  };

  const pStyle = {
    ...textStyle,
    display: "inline", // Faz o parágrafo ocupar uma linha
  };

  return (
    <div style={countdownStyle}>
      <h2 style={pStyle}>
        {countdown > 0 ? "Memorize as Cartas! " : "O jogo começou! "}
        {countdown > 0 && <span>Revelando em: {countdown} segundos</span>}
      </h2>
      {countdown === 0 && <p style={pStyle}>Boa sorte!</p>}
    </div>
  );
};

export default Countdown;
