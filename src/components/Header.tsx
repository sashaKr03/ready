import React, { FC, useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import "./Header.css"
import { Context } from '..';
import { user } from '../util/dataBase';
import { useToggle } from '../hooks/useToggle';
import SideHeader from './SideHeader';

   interface interContext {
    films:[],
    isAuth:boolean,
    userIn:user,
    searchQueryRef:any,
    menuVisible:boolean
    setMenuVisible:any
    sideVisible:boolean
    setSideVisible:any
  }

const Header:FC = () => {

  const navigate = useNavigate()

  const {isAuth, userIn, searchQueryRef, menuVisible, setMenuVisible, sideVisible, setSideVisible}:interContext = useContext(Context)  

  function menuButtonClick(){
    setSideVisible()
    !menuVisible && setMenuVisible()
  }

  return (
    <header>
      <SideHeader sideVisible={sideVisible} setSideVisible={setSideVisible}/>
      <div><Link className='logo link' to='/'>UAFilms</Link></div>
      <div className='adminPanelHover'>
          {userIn.adminStatus === true &&
          <div className='adminPanel'><Link to={'/adminPanel'}>Admin Panel</Link></div>
          }
          </div>
      <div>
        <div className='uS'>
        {isAuth && 
           <div>
          <NavLink className='link' to='/user'><img className='userImg' alt='userImage' src={userIn.userImg}/> {userIn.name.length>7 ? userIn.name.substr(0,8)+'...' : userIn.name}</NavLink>
           </div> 
           }
          {!isAuth && 
           <div className='logButts'><NavLink className='link logButt' to='/login'>Увійти</NavLink> /
           <NavLink className='link logButt' to='/reg'>Зарегеструватись</NavLink></div> 
           }  
        <div className='search'>
          <label htmlFor='search'>Пошук:  </label>
          <input 
          ref={searchQueryRef}
          placeholder='Пошук' 
          name='search'
          />
          <button onClick={()=>navigate('/search')} className='searchButton'>
            <img className='searchButtonImg' alt='search' src='https://cdn-icons-png.flaticon.com/512/149/149852.png'/>
          </button>
        </div>
      </div>
      <button onClick={menuButtonClick} className='menuButtom'>|||</button>
      </div>
    </header>
  )
}
export default Header