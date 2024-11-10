export default function Log({ players}) {
    return (
        <ol id="log">
            { players.map( (player) => (
                                            <li key={player.playerName}>
                                                {player.playerName} has selected {player.cell.row},{player.cell.col}
                                            </li>
                                        )
                        )
            }
        </ol>
    );
}