import { useState, useEffect} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

function CheckAnswer(props) {

    const questionScore = props.jScore

    const [userValue, setUserValue] = useState('');
    const [disabledInput, setDisabledInput] = useState(false);
    const [currentScore, setCurrentScore] = useState(questionScore);


    //track 2 events within this component, the user submitted answer and the form submit

    const handleInput = function(e) {
        setUserValue(e.target.value.toLowerCase());
    }

    const handleSubmit = function(e) {
        e.preventDefault()
        props.handleSubmit(e, userValue)
        if (props.jAnswer === userValue) {
            setDisabledInput(true)
            props.trackScore(currentScore);
            console.log('We right')
        } else if(props.jAnswer !== userValue) {
            setDisabledInput(true)
            console.log('We wrong');
        }
    };

    useEffect( () => {
        props.trackDisable(disabledInput)
    }, [disabledInput])
    

    
    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit} action="#">
                <label htmlFor="answer"></label>
                <div className="inputIn">
                    <input className="inputField" type="text" name="answer" id="answer"
                        onInput={handleInput}
                        placeholder="What Is..."
                        disabled={disabledInput}
                    />
                    <button className="inputButton"><FontAwesomeIcon icon={faArrowRightToBracket} className="iconEnter" type='submit' /></button>
                </div>
            </form>
        </div>
    )

}

export default CheckAnswer;