
# React Mini Games

A collection of two interactive games — **Memory Match** and **Hangman** — built using React, JavaScript, and CSS.

This project focuses on React state management, event handling, conditional rendering, accessibility, and responsive UI design.

## Games

### 1. Memory Match

A card-matching game where players flip two cards at a time to find matching pairs.

**Features**
- Randomized cards using the Fisher–Yates shuffle algorithm
- Two-card flip and matching logic
- Automatic reset of unmatched cards after a short delay
- Prevention of additional card selections during comparison
- Win detection when all pairs are matched
- Restart functionality

### 2. Hangman

A word-guessing game where players must identify a hidden word within six incorrect attempts.

**Features**
- Random word selection from a predefined list
- Interactive alphabet keyboard
- Automatic reveal of correctly guessed letters
- Progressive Hangman drawing for incorrect guesses
- Win and loss detection
- Restart functionality

## Tech Stack

- React
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite

## Accessibility

Both games include accessibility considerations such as:

- Semantic HTML elements
- Keyboard-accessible controls
- Descriptive ARIA labels
- Screen-reader-friendly game status messages
- Disabled states for unavailable interactions
- Visible keyboard focus indicators

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/akilasankaran/react-mini-games.git
```

Navigate to the project:

```bash
cd react-mini-games
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Project Structure

```text
src/
├── components/
│   ├── MemoryGame/
│   │   ├── MemoryGame.jsx
│   │   └── MemoryGame.css
│   └── Hangman/
│       ├── Hangman.jsx
│       └── Hangman.css
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Key Concepts Practised

- React Hooks (`useState`, `useEffect`)
- State updates and derived state
- Conditional rendering
- Event handling
- Effect cleanup and timers
- Array manipulation and randomization
- Component-based architecture
- Accessibility and responsive design

## Author

**Akila Sankaran**

GitHub: https://github.com/akilasankaran
