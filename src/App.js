import './App.css';
//Import Axios so we can make our request to the API
import axios from 'axios';

//Import the useState and useEffect hook
import { useState, useEffect } from 'react';

//Import QuestionSection component
import QuestionSection from './QuestionSection';

import Footer from './Footer';





function App() {

  //Call useState to track which data is returned from the API
  //The API returns an array of objects

  const [questionArray, setQuestionArray] = useState([]);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [soundPlayer, setSoundPlayer ] = useState(false)

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


  const incrementCounter = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }


  return (
    <>
    <div className="App">
      {/* <SoundPlayer /> */}
      <h1>Jeopardy</h1>
      <QuestionSection theQuestion={questionArray} questionIndex={currentQuestionIndex} incrementIndex={incrementCounter} />
    </div>
    <div>
      <Footer />
    </div>
  </>
  );
}

export default App;
