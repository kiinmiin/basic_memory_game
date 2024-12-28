import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./GameSection.css";

const GameSection = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const shuffleCards = () => {
      const cardData = [
        { id: 1, image: "https://cdn.pixabay.com/photo/2016/10/30/18/01/apple-1783882_960_720.png", name: "apple" },
        { id: 2, image: "https://cdn.pixabay.com/photo/2017/02/12/11/01/banana-2059729_960_720.png", name: "banana" },
        { id: 3, image: "https://cdn.pixabay.com/photo/2014/12/21/23/34/cherry-575547_960_720.png", name: "cherry" },
        { id: 4, image: "https://cdn.pixabay.com/photo/2022/03/17/10/03/lemon-7074240_960_720.png", name: "lemon" },
        { id: 5, image: "https://cdn.pixabay.com/photo/2020/03/31/16/26/watermelon-4988432_960_720.png", name: "watermelon" },
        { id: 6, image: "https://cdn.pixabay.com/photo/2020/07/29/05/37/pear-5446949_960_720.png", name: "pear" },
      ];
      const duplicatedCards = [...cardData, ...cardData].map((card, index) => ({
        ...card,
        id: index + 1,
      }));
      return duplicatedCards.sort(() => Math.random() - 0.5);
    };

    setCards(shuffleCards());
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
  };

  const handleCardClick = (card) => {
    if (flippedCards.length === 2 || matchedCards.includes(card.id)) return;

    setFlippedCards((prev) => [...prev, card]);

    if (flippedCards.length === 1) {
      setMoves((prev) => prev + 1); 
      const [firstCard] = flippedCards;
      if (firstCard.name === card.name) {
        setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
        setFlippedCards([]);
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  return (
    <div className="container">
      <div className="heading-container">
        <h1 className="gameheading">Memory Card Game</h1>
        <h2 className="game-heading">Match the cards!</h2>
      </div>
      <div className="progress-container">
        <div className="move-counter">Moves: {moves}</div>
        <button className="restart-button" onClick={initializeGame}>
          Restart Game
        </button>
      </div>
      <div className="cards-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleClick={handleCardClick}
            flipped={flippedCards.includes(card) || matchedCards.includes(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default GameSection;
