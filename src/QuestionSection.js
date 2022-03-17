import { useState, useEffect } from 'react';

import IndividualQuestion from "./individualQuestion";

import CheckAnswer from './CheckAnswer';

import GameOver from './GameOver';

import NextButton from './NextButton';

function QuestionSection (props) {

    const [userInput, setUserInput] = useState('');

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const [userScore, setUserScore] = useState(0);

    const usersAnswer = function (e, usersAnswer) {
        e.preventDefault();

        setUserInput(userInput.toLowerCase())
    }

    const incrementCounter = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
    }

    const trackUserScore = (usersResponse) => {
        setUserScore(userScore + usersResponse)
    }

    return(
        <section>
            <div className="questionContainer">
            {
                currentQuestionIndex <= 4 ?
                props.theQuestion.map( (question, index) => {
                    
                    return (
                        index == currentQuestionIndex ?
                        
                        <>
                        <IndividualQuestion 
                        key = {question.category.id}
                        jQuestion = {question.question}
                        jAnswer = {question.answer}
                        jCategory = {question.category.title}
                        jScore = {question.value}
                        />
                        <div className="inputFlexContainer">
                            <CheckAnswer 
                            jQuestion = {question.question}
                            jScore={question.value}
                            jAnswer = {question.answer.toLowerCase()}
                            handleSubmit = { usersAnswer }
                            trackScore = { trackUserScore }
                            key={question.category.id}
                            />
                            <NextButton 
                            incrementIndex = { incrementCounter }
                            />
                        </div>
                        </>   

                        : null
                    )
                })
                : <GameOver 
                displayScore = { userScore }
                />
            }

            {

            }
            </div>  
        </section>
    )
}

export default QuestionSection;