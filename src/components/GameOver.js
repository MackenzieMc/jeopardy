import IndividualQuestion from "./individualQuestion";

function GameOver(props) {

    const handleRestart = () => {
        window.location.reload()
    }
    return (
        <div className="gameOver">
            <div className="questionCard">
                <h2>Game Over!</h2>
                <h3>Your Score: <span className="scoreInt">{props.displayScore}</span></h3>
                <button className="restartButton" onClick={handleRestart}>Play Again!</button>
            </div>          
        </div>
    )
}

export default GameOver; 