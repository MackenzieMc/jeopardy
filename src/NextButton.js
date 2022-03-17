import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function NextButton(props) {
    const handleClick = () => {
        props.incrementIndex();
    }
    return(
        <button onClick={handleClick} className="buttonNext">Next Question <FontAwesomeIcon icon={ faArrowRight } className="iconNext" /></button>
    )
}

export default NextButton;