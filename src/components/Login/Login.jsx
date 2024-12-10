import { useState } from "react"
import Button from "../UI/Button"
import Input from "../UI/Input"

const Login = ({handleIsLoggedIn})=>{
    const [isSigningUp, setIsSigningUp] = useState(false)
    const [message,setMessage] = useState("")
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = ()=>{
        if(email === ""|| password=== "" ){
            setMessage("Form Must Be Filled Out")
        }
    }

    const handleSignUp = ()=>{

    }
  
    return(
        <div id="login">
           <h2>Welcome</h2>
           <h3>Please login or sign up to start your react quiz</h3>
           <h1>{message}</h1>
           <div className="login-holder">
             <Input placeHolder="Email"/>
             <Input placeHolder="Password" type="password"/>
             <div className="login-button-holder">
               <Button onClick={handleLogin} >LogIn</Button>
               <Button onClick={handleSignUp} >SignUp</Button>
             </div> 
           </div>       
        </div>
    )
}

export default Login