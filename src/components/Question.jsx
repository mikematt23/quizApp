import QuestionTimer from "./QuestionTimer"

export default function Question({question}){
   return(
    <div id="question">
        <QuestionTimer/>
       <h2>{question.text}</h2>
    </div>
   )
}