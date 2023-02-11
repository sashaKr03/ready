import React, { FC } from 'react'
import { NavLink } from 'react-router-dom';
import '../components/Nav.css'

const Nav: FC = () => {
  return (
    <div className='nav'>
        <NavLink to='/' className='page'>Головна</NavLink>
        <NavLink to='/new' className='page'>Новинки</NavLink>
        <NavLink to='/top' className='page'>Топ фільмів</NavLink>
    </div>
  )
}

export default Nav