'use client'
import { HTMLInputTypeAttribute, useId, ChangeEventHandler, FocusEventHandler, LegacyRef } from "react"
import { UseFormRegister, FieldValues } from "react-hook-form"
import '@/styles/form.css'


type Inputs = {
  name: string
  lastname: string
  email: string
  phoneNumber: string
  message: string
}
interface Props {
    type: HTMLInputTypeAttribute
    title: string
    name: keyof Inputs
    register: UseFormRegister<Inputs>
    error?: any
}
export const Input = ({type, title, name, register, error}: Props) => {
    const inputId = useId()
    const classname = error ? 'input error' : 'input'

  return (
    <div>
        <label htmlFor={inputId}>{title}</label>
        <input 
        className={classname}
        type={type} 
        id={inputId}
        {...register(name)}/>
        <strong> {error}</strong>
        
    </div>
  )
}
