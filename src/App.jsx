import React, { useState, useEffect } from "react";
import Card from "./Card"; // Importa o componente de carta
import "./App.css";
import initialCards from "./cards.json"; // Importa os pares de cartas do JSON

function App() {
  const [cards, setCards] = useState([]); // Estado para as cartas
  const [selectedCards, setSelectedCards] = useState([]); // Cartas selecionadas pelo jogador
  const [matchedCards, setMatchedCards] = useState([]); // Pares encontrados
  const [showCountdown, setShowCountdown] = useState(false); // Controla a exibição da contagem regressiva
  const [countdown, setCountdown] = useState(5); // Temporizador de 5 segundos
  const [gameStarted, setGameStarted] = useState(false); // Estado para indicar se o jogador está no modo de jogo
  const [showStartMessage, setShowStartMessage] = useState(false); // Controla a exibição da mensagem "Começar"

  // Função para embaralhar as cartas
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  // Função para iniciar o jogo a partir do menu inicial
  const handleStart = () => {
    setShowCountdown(true); // Mostra a contagem regressiva
    setCards(shuffleArray([...initialCards])); // Embaralha as cartas
  };

  // Lógica para a contagem regressiva e virar as cartas
  useEffect(() => {
    if (showCountdown && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000); // Contagem regressiva
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setShowCountdown(false); // Para a contagem regressiva
      setShowStartMessage(true); // Mostra a mensagem para iniciar o jogo
    }
  }, [countdown, showCountdown]);

  // Função para começar o jogo quando as cartas são viradas para baixo
  useEffect(() => {
    if (showStartMessage) {
      const timer = setTimeout(() => {
        setShowStartMessage(false);
        setGameStarted(true);
      }, 2000); // Exibe a mensagem "Começar" por 2 segundos antes de iniciar o jogo
      return () => clearTimeout(timer);
    }
  }, [showStartMessage]);

  // Função para gerenciar o clique nas cartas
  const handleCardClick = (card) => {
    if (
      !gameStarted ||
      selectedCards.length === 2 ||
      selectedCards.includes(card)
    )
      return;

    setSelectedCards([...selectedCards, card]);
  };

  // Lógica para verificar se as cartas selecionadas formam um par
  useEffect(() => {
    if (selectedCards.length === 2) {
      const [firstCard, secondCard] = selectedCards;
      if (firstCard.value === secondCard.value) {
        setMatchedCards([...matchedCards, firstCard, secondCard]); // Adiciona ao estado de cartas correspondentes
      }
      setTimeout(() => setSelectedCards([]), 1000); // Reseta as cartas selecionadas após 1 segundo
    }
  }, [selectedCards]);

  return (
    <div className="game-container">
      {!showCountdown && !gameStarted && !showStartMessage && (
        <div className="menu">
          <button onClick={handleStart}>Iniciar</button>{" "}
          {/* Botão para iniciar o jogo */}
        </div>
      )}

      {showCountdown && (
        <div className="countdown">
          <h2>Memorize as Cartas!</h2>
          <p>Revelando em: {countdown} segundos</p>
          <div className="board">
            {cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                isFlipped={true} // Todas as cartas viradas para cima durante a contagem regressiva
              />
            ))}
          </div>
        </div>
      )}

      {showStartMessage && (
        <div className="start-message">
          <h2>Começar!</h2> {/* Mensagem "Começar" antes de iniciar o jogo */}
        </div>
      )}

      {gameStarted && (
        <div className="board">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              onClick={handleCardClick}
              isFlipped={
                selectedCards.includes(card) || matchedCards.includes(card)
              } // Controla o estado das cartas
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
