import { useEffect,useState } from "react";

export default function QuestionTimer(){
  const [timer,setTimer] = useState(6000)

  let interval
  useEffect(()=>{
    console.log(timer)
      interval = setInterval(()=>{
        setTimer((prevTime)=>{
          return prevTime -100
        })
    },100) 
    
  },[])

  useEffect(()=>{
    if(timer === 0){
        console.log('out of time')
        clearInterval(interval)
    }
  },[timer])
  

  return <progress max={6000}  value={timer} />
}