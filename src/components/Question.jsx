import QuestionTimer from "./QuestionTimer"
import Answers from "./Answers"

export default function Question({question, nextQuestion,  handleUserAnswers, userAnswers}){
   return(
    <div id="question">
       <QuestionTimer 
         question= {question} 
         nextQuestion = {nextQuestion}
       />
       <h2>{question.text}</h2>
       <Answers 
         answers={question.answers} 
         nextQuestion = {nextQuestion}
         handleUserAnswers = {handleUserAnswers}
         userAnswers ={userAnswers}
       />
    </div>
   )
}