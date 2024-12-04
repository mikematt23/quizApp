

const Answers = (props)=>{
  const handleClick = (event)=>{
     props.handleUserAnswers(event.target.textContent)
   
     props.nextQuestion()
  }
  return (
      <ul id="answers">
        {props.answers.map((answer)=>{
          return <li className="answer">
            <button onClick={handleClick}>{answer}</button>
          </li>
        })}
      </ul>
  )
}


export default Answers