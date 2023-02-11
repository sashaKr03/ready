import React from 'react'
import './ModalWindow.css'

interface interModuleWindow {
    children: any,
    value:boolean,
    moduleClose: ()=>void
}

const ModalWindow: React.FC<interModuleWindow> = ({children, value, moduleClose}) => {
    
  return (
<div style={{visibility:value ? 'hidden': 'visible'}} className='backModule'>
    <div className='moduleWindow'>
    <div className='closeModule' ><div onClick={moduleClose}>Закрити</div></div>
        <div className='moduleChildren'>{children} </div>
    </div>
</div>
  )
}

export default ModalWindow