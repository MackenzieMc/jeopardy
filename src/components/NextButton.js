import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function NextButton(props) {

    const [userValue, setUserValue] = useState('');

    const handleClick = (e) => {
        props.incrementIndex();
        props.handleSubmit(e, userValue)
    }

    return(
        <button onClick={handleClick} className="buttonNext">Next Question <FontAwesomeIcon icon={ faArrowRight } className="iconNext" /></button>
    )
}

export default NextButton;