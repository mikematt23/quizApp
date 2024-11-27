import QuestionTimer from "./QuestionTimer"

export default function Question({question, nextQuestion}){
   return(
    <div id="question">
        <QuestionTimer question= {question} nextQuestion = {nextQuestion}/>
       <h2>{question.text}</h2>
    </div>
   )
}