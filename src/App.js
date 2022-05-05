import './App.css';
//Import Axios so we can make our request to the API
import axios from 'axios';

//Import the useState and useEffect hook
import { useState, useEffect } from 'react';

//Import  Components
import HomeScreen from './components/HomeScreen';
import QuestionSection from './components/QuestionSection';
import SoundPlayer from './components/SoundPlayer'
import Footer from './components/Footer';

// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';






function App() {

  //Call useState to track which data is returned from the API
  //The API returns an array of objects

  const [questionArray, setQuestionArray] = useState([]);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [displayHome, setDisplayHome] = useState(true)

  useEffect( () => {
    //Test out the API
    axios({
      url: 'https://jservice.io/api/random',
      params: {
        count: 5
      }
    }).then( (apiData) => {
      setQuestionArray(apiData.data)
    }).catch( (error) => {
      console.log('Error:' + error);
    })
  }, [])

  const setDisplay = () => {
    setDisplayHome(false)
  }

  const incrementCounter = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }


  return (
    <>
    <div className="App">
      <div className="wrapper">
        <SoundPlayer />
        <h1>Jeopardy</h1>
        
        { displayHome ?
          <HomeScreen display={setDisplay}/>
          :
          <div>
            <QuestionSection theQuestion={questionArray} questionIndex={currentQuestionIndex} incrementIndex={incrementCounter}/>
          </div>

        }
        <Footer />
      </div>
    </div>
  </>
  );
}

export default App;
