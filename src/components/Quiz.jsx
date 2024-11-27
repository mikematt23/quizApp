import { useState } from "react"
import QUESTIONS from "../assets/questions.js"
import Question from "./Question.jsx"



export default function Quiz (){
    const [questionIndex, setQuestionIndex] = useState(0)

    function handleNextQuestion(){
        setQuestionIndex((prev)=>{
            return prev + 1
        })
    }

    return(
        <div id="quiz">
         <Question question = {QUESTIONS[questionIndex]} nextQuestion = {handleNextQuestion} />
        </div>
    )
}

