

function GameOver(props) {
    return (
        <div className="gameOver">
            <div className="questionCard">
                <h2>Game Over!</h2>
                <h3>Your Score: {props.displayScore}</h3>
            </div>
        </div>
    )
}

export default GameOver; 