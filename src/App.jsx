import { useState } from "react";
import MemoryGame from "./components/MemoryGame/MemoryGame";
import Hangman from "./components/Hangman/Hangman";
import "./App.css";

export default function App() {
  const [activeGame, setActiveGame] = useState("memory");

  return (
    <main className="app">
      <header className="app-header">
        <h1>React Mini Games</h1>
        <p>Two classic games built with React</p>
      </header>

      <nav className="game-nav" aria-label="Choose a game">
        <button
          aria-pressed={activeGame === "memory"}
          onClick={() => setActiveGame("memory")}
        >
          Memory Match
        </button>

        <button
          aria-pressed={activeGame === "hangman"}
          onClick={() => setActiveGame("hangman")}
        >
          Hangman
        </button>
      </nav>

      <section className="game-container">
        {activeGame === "memory" ? <MemoryGame /> : <Hangman />}
      </section>
    </main>
  );
}