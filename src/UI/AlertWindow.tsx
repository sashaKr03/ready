import React from 'react'
import './AlertWindow.css'

interface interAlertWindow{
    children:any
    value:boolean
}

const AlertWindow:React.FC<interAlertWindow> = ({children, value}) => {

  return (
    <div style={{visibility:value ? 'hidden': 'visible'}} className='alertWindow'>
        {children}
    </div>
  )
}

export default AlertWindow