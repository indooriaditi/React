import { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({onSquareSelect, activeSymbol}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectedSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedGameBoard[rowIndex][colIndex] = activeSymbol;
            return updatedGameBoard;
        });

        onSquareSelect();
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((cell, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSelectedSquare(rowIndex, colIndex)}>{cell}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}