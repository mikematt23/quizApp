import Button from "../UI/Button"

const User = ({user,handleQuiz})=>{

  function handleClick(){
     handleQuiz()
  }
  return (
    <>  
        <div>
            <h2>{user.email}</h2>
            <h2>{user.score}%</h2>
        </div>
        <p>Ready To start! Click the button to begin.</p>
        <Button onClick={handleClick}>Start Quiz</Button>
    </>
  )
}

export default User