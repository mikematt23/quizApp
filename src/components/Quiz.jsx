import { useState } from "react"
import QUESTIONS from "../assets/questions.js"
import Question from "./Question.jsx"



export default function Quiz (){
    const [questionIndex, setQuestionIndex] = useState(0)
    const [answersCorrect, setAnswersCorrect] = useState(0)
    const [answersWrong, setAnswersWrong] = useState(0)
    const [userAnswers, setUserAnswers] = useState([])
    const [outOfQuestions, setOutOfQuestions] = useState(false)

    function handleNextQuestion(){
        if(QUESTIONS.length-1 != questionIndex){
            setQuestionIndex((prev)=>{
                return prev + 1
            })
        }else{
           setOutOfQuestions(true)
        }
    }

    function handleUserAnswers(answer){
        setUserAnswers([answer, ...userAnswers])
    }

    return(
        <div id="quiz">
         <Question 
           question = {QUESTIONS[questionIndex]} 
           nextQuestion = {handleNextQuestion} 
           handleUserAnswers = {handleUserAnswers}
           userAnswers = {userAnswers}
         />
        </div>
    )
}

