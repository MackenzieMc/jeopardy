//Import use state to track user input
import {useState, useEffect} from 'react';

import QuestionSection from './QuestionSection';

import App from './App';

function FormAnswer (props) {

    const [userValue, setUserValue] = useState('');
    
    //track 2 events within this component, the user submitted answer and the form submit

    const handleInput = function(e) {
        setUserValue(e.target.value);
    }

    const handleUserAnswer = function(e) {
        props.handleSubmit(e, userValue);
        console.log(userValue);

    }
    
    const handleIndexIncrease = function() {
        props.incrementIndex();
    }

    const answerCheck = function() {
        props.jAnswer == userValue ?


        console.log('Correct')
        : console.log('Incorrect')

        console.log(props.theQuestion.answer, userValue);
    }

    return (
        <>
        {/* <form onSubmit={ (e) => { handleUserAnswer(e) ; answerCheck()} }>
            <label htmlFor="answer"></label>
            <input className="inputField" type="text" name="answer" id="answer" 
            onInput={ handleInput }
            />
            <button className="inputButton">Submit Answer</button>
        </form> */}
        </>
        
    )
}

export default FormAnswer;