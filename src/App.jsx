import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Card from "./components/Card";
import LetsPlay from "./components/LetsPlay";
import MoveCounter from "./components/MoveCounter"; // Importe o MoveCounter
import VictoryMessage from "./components/VictoryMessage"; // Importe o componente VictoryMessage
import "./App.css";
import initialCards from "./cards.json"; // Cartas do jogo

function App() {
  const [cards, setCards] = useState([]); // Estado das cartas
  const [selectedCards, setSelectedCards] = useState([]); // Cartas selecionadas
  const [matchedCards, setMatchedCards] = useState([]); // Cartas combinadas
  const [countdown, setCountdown] = useState(5); // Valor da contagem regressiva
  const [gameStarted, setGameStarted] = useState(false); // Estado do jogo
  const [cardsFlipped, setCardsFlipped] = useState(false); // Controla se as cartas estão viradas
  const [moveCount, setMoveCount] = useState(0); // Contador de jogadas
  const [gameWon, setGameWon] = useState(false); // Estado para indicar vitória

  // Embaralha as cartas ao carregar o componente, apenas se ainda não estiverem embaralhadas
  useEffect(() => {
    if (cards.length === 0) {
      setCards(shuffleArray([...initialCards]));
    }
  }, [cards]);

  // Função para embaralhar as cartas
  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  // Inicia o jogo
  const handleStart = () => {
    setGameStarted(true); // Inicia o jogo
    setCountdown(5); // Reinicia a contagem
    setCardsFlipped(true); // Mostra as cartas viradas para cima
    setSelectedCards([]); // Limpa as cartas selecionadas
    setMatchedCards([]); // Limpa as combinações
    setCards(shuffleArray([...initialCards])); // Embaralha as cartas
    setMoveCount(0); // Reinicia o contador de jogadas
    setGameWon(false); // Reinicia o estado de vitória
  };

  // Reinicia o jogo ao clicar em "Exit"
  const handleExit = () => {
    setGameStarted(false); // Para o jogo
    setCountdown(5); // Reinicia o contador
    setCardsFlipped(false); // Esconde as cartas
    setSelectedCards([]); // Limpa as seleções
    setMatchedCards([]); // Limpa as combinações
    setMoveCount(0); // Reinicia o contador de jogadas
    setGameWon(false); // Reinicia o estado de vitória
  };

  // Controla a contagem regressiva
  useEffect(() => {
    if (gameStarted && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && gameStarted) {
      setCardsFlipped(false); // Vira as cartas para baixo
    }
  }, [countdown, gameStarted]);

  // Controla o clique nas cartas
  const handleCardClick = (card) => {
    if (
      !gameStarted ||
      selectedCards.length === 2 ||
      selectedCards.includes(card) ||
      matchedCards.includes(card)
    )
      return;

    setSelectedCards([...selectedCards, card]);

    if (selectedCards.length === 1) {
      const firstCard = selectedCards[0];
      // Verifica se as duas cartas são iguais
      if (firstCard.value === card.value) {
        setMatchedCards([...matchedCards, firstCard, card]); // Marca como combinadas
      }
      // Após selecionar duas cartas (independente de serem iguais ou não), incrementa o contador de jogadas
      setMoveCount((prevCount) => prevCount + 1);
      // Aguarda 1 segundo antes de virar as cartas
      setTimeout(() => setSelectedCards([]), 1000);
    }
  };

  // Checa se o jogador venceu (descobriu todos os pares)
  useEffect(() => {
    if (
      gameStarted &&
      matchedCards.length === cards.length &&
      cards.length > 0
    ) {
      setGameWon(true); // Quando todos os pares forem combinados, indicar vitória
    }
  }, [matchedCards, gameStarted, cards]);
  return (
    <div className="game-container">
      {/* Menu sempre visível */}
      <Menu
        onStart={handleStart}
        onExit={handleExit}
        gameStarted={gameStarted}
        countdown={countdown}
      />

      {/* Exibir "Let's Play" se o jogo não começou */}
      {!gameStarted && <LetsPlay onStart={handleStart} />}

      {/* Exibir contador de jogadas */}
      {gameStarted && <MoveCounter moveCount={moveCount} />}

      {/* Exibir a mensagem de vitória */}
      {gameWon && <VictoryMessage onExit={handleExit} />}

      {/* Tabuleiro de cartas sempre visível */}
      {gameStarted && (
        <div className="cards-container">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              onClick={handleCardClick}
              isFlipped={
                cardsFlipped ||
                selectedCards.includes(card) ||
                matchedCards.includes(card)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
