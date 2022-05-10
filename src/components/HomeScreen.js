import { useState } from "react"

function HomeScreen(props) {
    const [display, setDisplay] = useState(true)

    const handleClick = () => {
        props.display(false)
    }

    return (
        <div className="questionCard">
            <h2>Welcome to Jeopardy!</h2>
            <p>Test your knowledge through a series of 5 questions pulled from previous episodes of Jeopardy! Compete against your friends to see who can score higher!</p>
            <button onClick={handleClick} className="startButton">Lets Play!</button>
        </div>
    )
} 

export default HomeScreen