function IndividualQuestion(props) {
    
    return (  
        props.jUserAnswer == '' ?
        <div className="questionCard">
            <div className="categoryText">
                <h3>{props.jCategory}</h3>
            </div>
            <div className="questionText">
                <h3>{props.jQuestion}</h3>
            </div>
            <div className="scoreInt">
                <h3>{props.jScore}</h3>
            </div>
        </div>

        : props.jAnswer == props.jUserAnswer ?
        <div className="questionCard">
            <div className="categoryText">
                <h3>{props.jCategory}</h3>
            </div>
            <div className="questionText">
                <h3>{props.jQuestion}</h3>
            </div>
            <div className="scoreInt">
                <h3>{props.jScore}</h3>
            </div>
            <div className="answerText">
                <h3>Correct! {props.Answer}</h3>
            </div>
        </div>

        :props.jUserAnswer !== props.jAnswer ?
        <div className="questionCard">
            <div className="categoryText">
                <h3>{props.jCategory}</h3>
            </div>
            <div className="questionText">
                <h3>{props.jQuestion}</h3>
            </div>
            <div className="scoreInt">
                <h3>{props.jScore}</h3>
            </div>
            <h3>Sorry, incorrect!</h3>
            <h3>Correct Answer: {props.jAnswer}</h3>
        </div>

        : null
    )
}

export default IndividualQuestion