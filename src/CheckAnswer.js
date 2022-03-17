import {useEffect, useState} from 'react';
import QuestionSection from './QuestionSection';



function CheckAnswer(props) {

    const [userScore, setUserScore] = useState(0);

    const [userValue, setUserValue] = useState('');

    const scoreKeeper = function(usersResponse) {
        props.trackScore(usersResponse)
    }




    //track 2 events within this component, the user submitted answer and the form submit

    const handleInput = function (e) {
        setUserValue(e.target.value);
    }

    const handleUserAnswer = function (e) {
        props.handleSubmit(e, userValue);
        console.log(userValue);

    }

    // const handleIndexIncrease = function () {
    //     props.incrementIndex();
    // }
    
    async function answerCheck() {
        props.jAnswer == userValue ?
        
        scoreKeeper(props.jScore)
        : console.log('Incorrect');
        
        console.log(userScore);
        console.log(props.jAnswer, userValue, userScore, props.jScore)    
    }


        
    

    return (
        <div className="formContainer">
            <form onSubmit={(e) => { handleUserAnswer(e); answerCheck() }}>
                <label htmlFor="answer"></label>
                <input className="inputField" type="text" name="answer" id="answer"
                    onInput={handleInput}
                />
                <button className="inputButton">Submit Answer</button>
            </form>
        </div>
    )

}

export default CheckAnswer;