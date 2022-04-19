import { useState, useEffect} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';




function CheckAnswer(props) {


    const [userValue, setUserValue] = useState('');

    const [showAnswer, setShowAnswer] = useState(false)
    const [ inputDisable, setInputDisable ] = useState(false)

    const scoreKeeper = function(usersResponse) {
        props.trackScore(usersResponse)
    }

    //track 2 events within this component, the user submitted answer and the form submit

    const handleInput = function (e) {
        setUserValue(e.target.value);
    }

    const handleUserAnswer = function (e) {
        props.handleSubmit(e, userValue);
        setInputDisable(true)
    };

    useEffect( () => {
        props.trackDisable(inputDisable)
    }, [inputDisable])

    function answerCheck() {
        props.jAnswer === userValue ?
        
            scoreKeeper(props.jScore)

        : console.log('');
        
    }
    
    return (
        <div className="formContainer">
            <form onSubmit={(e) => { handleUserAnswer(e); answerCheck()}}>
                <label htmlFor="answer"></label>
                <div className="inputIn">
                    <input className="inputField" type="text" name="answer" id="answer"
                        onInput={handleInput}
                        placeholder="What Is..."
                        disabled={inputDisable}
                    />
                    <button className="inputButton"><FontAwesomeIcon icon={faArrowRightToBracket} className="iconEnter" /></button>
                </div>
            </form>
        </div>
    )

}

export default CheckAnswer;