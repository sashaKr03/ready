import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Context } from '..'
import { user } from '../util/dataBase'
import'./SideHeader.css'


interface interContext {
    films:[],
    isAuth:boolean,
    userIn:user,
    searchQueryRef:any,
  }

  interface sideHeaderInter{
    sideVisible: boolean
    setSideVisible:any
  }

const SideHeader:React.FC<sideHeaderInter> = ({sideVisible, setSideVisible}) => {

  const navigate = useNavigate()

  const {isAuth, userIn, searchQueryRef}:interContext = useContext(Context)  

  function searchButt(){
    navigate('/search')
    setSideVisible()
  }

  return (
    <div  
    className={sideVisible ? 'sideMenu' : 'sideMenu sideMenuActive'}>
        <div className='search'>
          <div className='topSide'><h1>Меню</h1> <h5 onClick={setSideVisible}>Закрити</h5></div>
          <hr/>
          <label htmlFor='search'>Пошук:  </label>
          <input 
          ref={searchQueryRef}
          placeholder='Пошук' 
          name='search'
          />
          <button onClick={searchButt} className='searchButtonSide'>
            <img className='searchButtonImg' alt='search' src='https://cdn-icons-png.flaticon.com/512/149/149852.png'/>
          </button>
         </div>
         <hr/>
         <div className='usSide'>
        {isAuth ?
           <div>
          <NavLink onClick={setSideVisible} className='link' to='/user'>
            <img className='userImgSide' alt='userImage' src={userIn.userImg}/>
             {userIn.name.length>7 ? userIn.name.substr(0,8)+'...' : userIn.name}
            </NavLink>
           </div> 
           :
           <div className='logButtsSide'>
            <NavLink className='link logButt' onClick={setSideVisible} to='/login'>
            Увійти
            </NavLink> /
           <NavLink onClick={setSideVisible} className='link logButt' to='/reg'>Зарегеструватись</NavLink>
           </div> 
           }
          </div>
          <hr/>
          <div className='adminPanelHoverSide'>
          {userIn.adminStatus === true &&
          <div className='adminPanelSide'><Link onClick={setSideVisible} to={'/adminPanel'}>Admin Panel</Link></div>
          }
          </div>
      </div>
  )
}

export default SideHeader