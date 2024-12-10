import { useRef } from "react"

const Input = ({type,placeHolder})=>{
  const input = useRef()

   return <input className="input" ref={input} type={type} placeholder={placeHolder}/>
}

export default Input 