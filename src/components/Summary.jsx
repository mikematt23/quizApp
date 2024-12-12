import { useEffect } from "react"
import logo from "../assets/quiz-complete.png"
import QUESTIONS from "../assets/questions"

const Summary = ({
   answersCorrect,
   answersWrong,
   answerSkipped,
   userAnswers,
   userEmail
})=>{
   useEffect(()=>{
      console.log("here")
      fetch("https://reactquizexpressapi-production.up.railway.app/UpdateUserScore",{
         headers:{
            "Content-type":"application/json"
         },
         method: "PUT",
         body: JSON.stringify({email: userEmail, score: Math.round(answersCorrect/QUESTIONS.length*100)})
      })
   },[])

   return(
    <div id="summary">
       <img src={logo} alt="" />
       <h2>Quiz Complete!</h2>
       <div id="summary-stats">
         <p className="text"><span className="number">{Math.round(answersCorrect/QUESTIONS.length*100)}%</span> Correct</p>
         <p className="text"><span className="number">{Math.round(answersWrong/QUESTIONS.length*100)}%</span> Wrong</p>
         <p className="text"><span className="number">{Math.round(answerSkipped/QUESTIONS.length*100)}%</span> Skipped</p>
       </div>
       <ol>
         {QUESTIONS.map((question)=>{
            let name ="user-answer"
            return <li>
               <h3>{question.id}</h3>
               <p className="question">{question.text}</p>
               {userAnswers.map((answer)=>{
                  let isCorrectClass
                  if(answer.answer === question.answers[question.correctAnswer]){
                     isCorrectClass = "correct"
                  }else if(answer.answer === "Skipped Question"){
                     isCorrectClass = "skipped" 
                  }else{
                     isCorrectClass = "wrong"
                  }
                  if(answer.id === question.id){
                     return <p className = {`user-answer ${isCorrectClass}`}>{answer.answer}</p>
                  }
               })}
            </li>
         })}
       </ol>
    </div>
   )
}


export default Summary