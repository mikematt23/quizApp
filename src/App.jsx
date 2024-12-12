import { useState } from "react";
import Login from "./components/Login/Login";
import Header from "./components/Header";
import Quiz from "./components/Quiz";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})

  const handleUser = (user)=>{
    setUser(user)
  }

  const handleIsLoggedIn = ()=>{
    setIsLoggedIn(true)
  }
    return(
        <>
          <Header/>
          {isLoggedIn && <Quiz isLoggedIn = {isLoggedIn} user ={user} />}
          {!isLoggedIn && <Login handleUser={handleUser} handleIsLoggedIn = {handleIsLoggedIn}/>}
        </>
    )
}

export default App;
