import { useEffect,useState } from "react";

const TIMER = 20000

export default function QuestionTimer({nextQuestion, question, handleUserAnswers}){
  const [timer,setTimer] = useState(TIMER)

   
  useEffect(()=>{
     const interval = setInterval(()=>{
        setTimer((prevTime)=>{
          return prevTime -100
        })
    },100) 
    
    return ()=>{
        clearInterval(interval)
        setTimer(TIMER)
    }
  },[question])

  useEffect(()=>{
    if(timer === 0){
        handleUserAnswers("Skipped Question",question.id)
        nextQuestion()
    }
  },[timer])
  

  return <progress max={TIMER}  value={timer} />
}