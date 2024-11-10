import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

import { useState } from "react";

function getActivePlayer(playerArray) {
  let currentPlayer = "X";

  // Switch active player
  if (playerArray.length > 0 && playerArray[0].playerName === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [playerArray, setPlayerArray] = useState([]);

  const activePlayer = getActivePlayer(playerArray);

  function handleActivePlayer(rowIndex, colIndex) {
    setPlayerArray((prevPlayerArray) => {
      const currentPlayer = getActivePlayer(prevPlayerArray);

      // After every turn, update the playerArray
      const updatedPlayerArray = [
        { cell: { row: rowIndex, col: colIndex }, playerName: currentPlayer },
        ...prevPlayerArray,
      ];

      return updatedPlayerArray;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player-1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player-2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSquareSelect={handleActivePlayer} players={playerArray} />
      </div>
      <Log players={playerArray} />
    </main>
  );
}

export default App;
