import { useState } from "react";
import "./App.css";
import Board from "../src/Components/Board";

function App() {
  const [isStarted, setIsStarted] = useState(false);

  const clickStart = () => {
    setIsStarted(true);
  };

  return (
    <div>
      <h1>Connect 4 game</h1>
      {isStarted ? null : <StartGame clickStart={clickStart} />}
      {isStarted ? <Board /> : null}
    </div>
  );
}

function StartGame({ clickStart }) {
  return (
    <div>
      <button id="begin-game" onClick={clickStart}>
        Start Game
      </button>
    </div>
  );
}

export default App;
