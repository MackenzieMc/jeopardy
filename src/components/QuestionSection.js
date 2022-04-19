import React, { useState } from 'react';

import IndividualQuestion from "./individualQuestion";

import CheckAnswer from './CheckAnswer';

import GameOver from './GameOver';

import NextButton from './NextButton';

function QuestionSection (props) {

    const [userInput, setUserInput] = useState('');

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const [userScore, setUserScore] = useState(100);

    const [trackDisable, setDisable] = useState(false)

    const usersAnswer = function (e, userAnswer) {
        e.preventDefault();

        setUserInput(userAnswer.toLowerCase())
    }

    const incrementCounter = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
    }

    const trackUserScore = (usersResponse) => {
        setUserScore(userScore + usersResponse)
    }

    const trackUserDisable = function(isDisabled) {
        setDisable(isDisabled)
    }

    return(
        <section>
            <div className="questionContainer">
            {
                currentQuestionIndex <= 4 ?
                props.theQuestion.map( (question, index) => {
                    
                    return (
                        index === currentQuestionIndex ?
                        
                        <React.Fragment key={index} >
                        <IndividualQuestion 
                        key = {question.category.id}
                        jQuestion = {question.question}
                        jAnswer = {question.answer.toLowerCase()}
                        jCategory = {question.category.title}
                        jScore = {question.value}
                        inputDisable={trackDisable}
                        jUserAnswer = {userInput}
                        />
                        <div className="inputFlexContainer">
                            <CheckAnswer 
                            jQuestion = {question.question}
                            jScore={question.value}
                            jAnswer = {question.answer.toLowerCase()}
                            handleSubmit = { usersAnswer }
                            trackScore = { trackUserScore }
                            trackDisable = { trackUserDisable }
                            key={userScore}
                            />
                            <NextButton 
                            incrementIndex = { incrementCounter }
                            key={currentQuestionIndex}
                            />
                        </div>
                        </React.Fragment>   

                        : null
                    )
                })
                : <GameOver 
                displayScore = { userScore }
                />
            }

            </div>  
        </section>
    )
}

export default QuestionSection;