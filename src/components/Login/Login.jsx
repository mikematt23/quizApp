import { useState, useRef } from "react"
import Button from "../UI/Button"
import Input from "../UI/Input"

const Login = ({handleIsLoggedIn, handleUser})=>{
    const [message,setMessage] = useState("")
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleLogin = async()=>{
        if(emailRef.current.value === ""|| passwordRef.current.value === "" ){
           setMessage("Form Must Be Filled Out")
        }
        const user = await fetch("https://reactquizexpressapi-production.up.railway.app/userLogin",{
          headers:{
            'Content-type':'application/json'
          },
          method:"POST",
          body:JSON.stringify({
            email:emailRef.current.value,
            password:passwordRef.current.value
          })
        })
        const json = await user.json()
        console.log(json)
        if(json.message === "No User"){
          setMessage("No User, Please Sign Up")
        }
        if(json.message === "Wrong Password"){
          setMessage("Wrong Password")
        }
        if(json.user){
          handleUser({
            email: json.user.email,
            score: json.user.score
          })
          handleIsLoggedIn()
        }
    }

    const handleSignUp = async ()=>{
      if(emailRef.current.value === ""|| passwordRef.current.value === "" ){
        setMessage("Please Fill Out Form To Sign Up")
      }
      const user = await fetch("https://reactquizexpressapi-production.up.railway.app/addUser",{
        headers:{
          "Content-type": "application/json"
        },
        method:"POST",
        body: JSON.stringify({
          email:emailRef.current.value,
          password:passwordRef.current.value
        })
      })
      const json = await user.json()
      console.log(json)
      if(json.message === "already a user"){
        setMessage("Already A User, Please Sign In")
      }
      if(json.message === "user added"){
        handleUser({
          email: json.user.email,
          score: json.user.score
        })
        handleIsLoggedIn()
      }
    }
  
    return(
        <div id="login">
           <h2>Welcome</h2>
           <h3>Please login or sign up to start your react quiz</h3>
           <h1>{message}</h1>
           <div className="login-holder">
             <Input ref={emailRef} placeHolder="Email"/>
             <Input ref={passwordRef} placeHolder="Password" type="password"/>
             <div className="login-button-holder">
               <Button onClick={handleLogin} >LogIn</Button>
               <Button onClick={handleSignUp} >SignUp</Button>
             </div> 
           </div>       
        </div>
    )
}

export default Login