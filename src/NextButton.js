function NextButton(props) {
    const handleClick = () => {
        props.incrementIndex();
    }
    return(
        <button onClick={handleClick}>Next Question</button>
    )
}

export default NextButton;