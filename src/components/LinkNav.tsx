import React from 'react'
import { Link } from 'react-router-dom';
import './LinkNav.css'

interface interLinkNav{
    children:any
    link:string
    classN?: string
}

const LinkNav:React.FC<interLinkNav> = ({children, link, classN}) => {
  return (
    <Link 
    className={classN ? classN : 'genreLink'}
    to={link}
    state={children}
    >
    {children}
    </Link>
  )
}

export default LinkNav