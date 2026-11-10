
import { useState, useEffect } from "react";
import "./MemoryGame.css";

const BASE_CARDS = Array.from({ length: 6 }, (_, index) => [
  { id: index * 2 + 1, value: String(index + 1) },
  { id: index * 2 + 2, value: String(index + 1) },
]).flat();

function randomizeCards() {
  const arr = [...BASE_CARDS];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

export default function MemoryGame() {
  const [cards, setCards] = useState(randomizeCards);
  const [flippedCards, setFlippedCards] = useState([]);

  const isGameWon = cards.length === 0;

  const handleCardClick = (cardId) => {
    if (
      flippedCards.includes(cardId) ||
      flippedCards.length >= 2
    ) {
      return;
    }

    setFlippedCards((prev) => [...prev, cardId]);
  };

  const handleRestart = () => {
    setFlippedCards([]);
    setCards(randomizeCards());
  };

  useEffect(() => {
    if (flippedCards.length !== 2) return;

    const firstCard = cards.find(
      (card) => card.id === flippedCards[0]
    );

    const secondCard = cards.find(
      (card) => card.id === flippedCards[1]
    );

    const timerId = setTimeout(() => {
      if (
        firstCard &&
        secondCard &&
        firstCard.value === secondCard.value
      ) {
        setCards((prev) =>
          prev.filter(
            (card) =>
              card.id !== firstCard.id &&
              card.id !== secondCard.id
          )
        );
      }

      setFlippedCards([]);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [flippedCards, cards]);

  return (
    <section className="memory-game" aria-labelledby="memory-title">
      <h2 id="memory-title">Memory Match</h2>

      <p>
        Find all matching pairs by flipping two cards at a time.
      </p>

      <div className="memory-actions">
        <p>Pairs remaining: {cards.length / 2}</p>

        <button
          type="button"
          className="restart-button"
          onClick={handleRestart}
        >
          Restart Game
        </button>
      </div>

      <div className="memory-board" aria-label="Memory card board">
        {cards.map((card) => {
          const isFlipped = flippedCards.includes(card.id);

          return (
            <button
              key={card.id}
              type="button"
              className={`number ${isFlipped ? "flipped" : ""}`}
              onClick={() => handleCardClick(card.id)}
              disabled={
                isFlipped || flippedCards.length >= 2
              }
              aria-label={
                isFlipped
                  ? `Card ${card.id}, value ${card.value}`
                  : `Card ${card.id}, face down`
              }
            >
              {isFlipped ? card.value : "?"}
            </button>
          );
        })}
      </div>

      <p role="status" className="game-message">
        {isGameWon ? "Congratulations! You matched all the cards!" : ""}
      </p>
    </section>
  );
}
