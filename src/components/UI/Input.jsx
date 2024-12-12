import { forwardRef } from "react"

const Input = forwardRef(function Input({type,placeHolder},ref){
   return <input className="input" ref={ref} type={type} placeholder={placeHolder}/>
})

export default Input 