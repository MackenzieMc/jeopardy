import QuestionSection from "./QuestionSection";

function GameOver(props) {
    console.log(props);
    return (
        <div className="questionCard">
            <h2>Game Over!</h2>
            <h3>Your Score: {props.displayScore}</h3>
        </div>
    )
}

export default GameOver; 