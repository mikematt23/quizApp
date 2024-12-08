import QuestionTimer from "./QuestionTimer"
import Answers from "./Answers"

export default function Question({
    question, 
    nextQuestion,  
    handleUserAnswers, 
    handleRightAnswer,
    handleWrongAnswer
  }){
   return(
    <div id="question">
       <QuestionTimer 
         question= {question} 
         nextQuestion = {nextQuestion}
         handleUserAnswers = {handleUserAnswers}
       />
       <h2>{question.text}</h2>
       <Answers 
         id ={question.id}
         answers={question.answers}
         correctAnswer = {question.answers[question.correctAnswer]} 
         nextQuestion = {nextQuestion}
         handleUserAnswers = {handleUserAnswers}
         handleRightAnswer = {handleRightAnswer}
         handleWrongAnswer = {handleWrongAnswer}
       />
    </div>
   )
}