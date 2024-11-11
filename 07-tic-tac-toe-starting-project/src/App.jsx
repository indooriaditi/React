import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

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
  
  // creating a copy of initial game board
  let gameBoard = [...initialGameBoard.map(array => [...array])];
  
  let isWinner;

  for (const player of playerArray) {
    const { cell, playerName } = player;
    gameBoard[cell.row][cell.col] = playerName;
  }

  // check for winner
  for(const combination of WINNING_COMBINATIONS) {
    const [firstCell, secondCell, thirdCell] = combination;
    const firstSymbol = gameBoard[firstCell.row][firstCell.column];
    const secondSymbol = gameBoard[secondCell.row][secondCell.column];
    const thirdSymbol = gameBoard[thirdCell.row][thirdCell.column];
    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      secondSymbol === thirdSymbol
    ) {
      isWinner = firstSymbol;
    }
  }

  // check for draw
  const isDraw = playerArray.length === 9 && !isWinner;

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

  function restart() {
    setPlayerArray([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player-1" symbol="X" isActive={activePlayer === "X"}/>
          <Player initialName="Player-2" symbol="O" isActive={activePlayer === "O"}/>
        </ol>
        {(isWinner || isDraw) && <GameOver winner={isWinner} onEnd={restart}/>}
        <GameBoard onSquareSelect={handleActivePlayer} board={gameBoard} />
      </div>
      <Log players={playerArray} />
    </main>
  );
}

export default App;
