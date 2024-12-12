import { useState } from "react"
import User from "./User/User.jsx"
import QUESTIONS from "../assets/questions.js"
import Question from "./Question.jsx"
import Summary from "./Summary.jsx"



export default function Quiz ({user}){
    const [startQuiz,setStartQuiz] =useState(false)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [answersCorrect, setAnswersCorrect] = useState(0)
    const [answersWrong, setAnswersWrong] = useState(0)
    const [answerSkipped, setAnswersSkipped] = useState(0)
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

    function handleWrongAnswer(){
        setAnswersWrong((prevState)=> prevState + 1)
    }

    function handleRightAnswer(){
        setAnswersCorrect((prevState)=> prevState + 1)
    }

    function handleUserAnswers(answer,id){
        let result = {
           id:id,
           answer: answer 
        }
        if(answer === "Skipped Question"){
            setAnswersSkipped((prevState)=> prevState + 1)
        }
        setUserAnswers([...userAnswers,result])
    }
    function handleQuiz(){
        setStartQuiz(!startQuiz)
    }

    return(
        <div id="quiz">
         {!startQuiz && <User 
           user = {user}
           handleQuiz = {handleQuiz}
         />}
         {!outOfQuestions && startQuiz && <Question 
           question = {QUESTIONS[questionIndex]} 
           outOfQuestions = {outOfQuestions}
           nextQuestion = {handleNextQuestion} 
           handleUserAnswers = {handleUserAnswers}
           handleRightAnswer = {handleRightAnswer}
           handleWrongAnswer = {handleWrongAnswer}
         />}
         {outOfQuestions && startQuiz && <Summary
           answersCorrect = {answersCorrect}
           answersWrong = {answersWrong}
           answerSkipped = {answerSkipped}
           userAnswers= {userAnswers}
           userEmail = {user.email}
         />}
        </div>
    )
}

