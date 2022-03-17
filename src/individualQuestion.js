function IndividualQuestion(props) {
    return (
    <>
        <div className="questionCard">
            <div className="categoryText">
                <h3>{props.jCategory}</h3>
            </div>
            <div className="questionText">
                <h3>{props.jQuestion}.</h3>
            </div>
            <div className="scoreInt">
                <h3>{props.jScore}</h3>
            </div>
        </div>
    </>
    )
}

export default IndividualQuestion