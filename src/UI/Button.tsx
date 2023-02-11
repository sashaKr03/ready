import React from 'react'
import './Button.css'

interface interButton{
    children: any,
    onClick?:any
    className?:string
    onSubmit?:any
}

const Button:React.FC<interButton> = ({children, onClick, className, onSubmit}) => {
  return (
    <button onSubmit={onSubmit} className={`uiButtom ${className}`} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button