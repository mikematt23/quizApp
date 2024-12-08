

const Answers = ({
  id,
  answers,
  correctAnswer,
  handleUserAnswers,
  nextQuestion,
  handleRightAnswer,
  handleWrongAnswer
})=>{
  
  const handleClick = (event)=>{
     handleUserAnswers(event.target.textContent,id)
     if(correctAnswer === event.target.textContent){
      handleRightAnswer()
     }else{
      handleWrongAnswer()
     }
     nextQuestion()
  }

  return (
      <ul id="answers">
        {answers.map((answer)=>{
          return <li key={answer.id} className="answer">
            <button onClick={handleClick}>{answer}</button>
          </li>
        })}
      </ul>
  )
}


export default Answers