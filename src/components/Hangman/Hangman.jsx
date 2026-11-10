
import { useState } from "react";
import "./Hangman.css";

const WORDS = [
  "JAVASCRIPT",
  "FRONTEND",
  "REACTJS",
  "SYNCHRONY",
];

const MAX_LIMIT = 6;

const ALPHABETS = Array.from(
  { length: 26 },
  (_, index) => String.fromCharCode(65 + index)
);

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  return WORDS[randomIndex];
}

export default function Hangman() {
  const [selectedWord, setSelectedWord] = useState(getRandomWord);
  const [guessedLetters, setGuessedLetters] = useState([]);

  const wrongAttempts = guessedLetters.filter(
    (char) => !selectedWord.includes(char)
  ).length;

  const isGameWon = selectedWord
    .split("")
    .every((char) => guessedLetters.includes(char));

  const isGameLost = wrongAttempts >= MAX_LIMIT;
  const isGameOver = isGameWon || isGameLost;

  const handleButtonClick = (char) => {
    if (guessedLetters.includes(char) || isGameOver) return;

    setGuessedLetters((prev) => [...prev, char]);
  };

  const handleRestart = () => {
    setGuessedLetters([]);
    setSelectedWord(getRandomWord());
  };

  return (
    <section className="hangman-game" aria-labelledby="hangman-title">
      <h2 id="hangman-title">Hangman</h2>

      <p>
        Guess the hidden word. You have {MAX_LIMIT} incorrect attempts.
      </p>

      <div
        className="hangman-drawing"
        role="img"
        aria-label={`Hangman drawing: ${wrongAttempts} of ${MAX_LIMIT} incorrect guesses`}
      >
        <div className="gallows-base" />
        <div className="gallows-pole" />
        <div className="gallows-top" />
        <div className="gallows-rope" />

        {wrongAttempts >= 1 && <div className="head" />}
        {wrongAttempts >= 2 && <div className="body" />}
        {wrongAttempts >= 3 && <div className="arm" />}
        {wrongAttempts >= 4 && <div className="arm right" />}
        {wrongAttempts >= 5 && <div className="leg" />}
        {wrongAttempts >= 6 && <div className="leg right" />}
      </div>

      <div className="word-display" aria-label="Word to guess">
        {selectedWord.split("").map((letter, index) => (
          <span key={index}>
            <span className="sr-only">
              {guessedLetters.includes(letter) || isGameLost
                ? `Letter ${index + 1}: ${letter}`
                : `Letter ${index + 1}: not yet guessed`}
            </span>

            <span aria-hidden="true">
              {guessedLetters.includes(letter) || isGameLost
                ? letter
                : "_"}
            </span>
          </span>
        ))}
      </div>

      <p className="attempts">
        Wrong attempts: {wrongAttempts}/{MAX_LIMIT}
      </p>

      <div
        className="alphabet-keyboard"
        role="group"
        aria-label="Choose a letter"
      >
        {ALPHABETS.map((char) => (
          <button
            key={char}
            type="button"
            onClick={() => handleButtonClick(char)}
            disabled={guessedLetters.includes(char) || isGameOver}
            className={
              guessedLetters.includes(char)
                ? selectedWord.includes(char)
                  ? "correct"
                  : "incorrect"
                : ""
            }
          >
            {char}
          </button>
        ))}
      </div>

      <p role="status" className="game-message">
        {isGameWon && "Congratulations! You won the game!"}

        {isGameLost && `You lost! The word was ${selectedWord}.`}
      </p>

      <button
        type="button"
        className="restart-button"
        onClick={handleRestart}
      >
        Restart Game
      </button>
    </section>
  );
}
