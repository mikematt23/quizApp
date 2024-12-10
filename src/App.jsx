import { useState } from "react";
import Login from "./components/Login/Login";
import Header from "./components/Header";
import Quiz from "./components/Quiz";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleIsLoggedIn = ()=>{
    setIsLoggedIn(true)
  }
    return(
        <>
          <Header/>
          {isLoggedIn && <Quiz/>}
          {!isLoggedIn && <Login handleIsLoggedIn = {handleIsLoggedIn}/>}
        </>
    )
}

export default App;
