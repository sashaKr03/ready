import React, { useContext } from 'react'
import './UserPage.css'
import UserFav from '../components/userFav';
import { Context } from '..';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {

  const {userIn, setUserIn, setIsAuth}:any = useContext(Context)

  const navigate = useNavigate()
  
  function exit(){
    setUserIn({})
    setIsAuth(false)
    navigate('/')
  }

  return (
    <div className='userPage'>
      {<>
        <div className='userPageHeader'>
          <img className='userPageImg' alt='Фото юзера'  src={userIn.userImg}/>
          <div className='userFavCover'>
          <h2>Улюблені фільми:</h2>
          {userIn.favFilms.length>0
          ?<UserFav films={userIn.favFilms}/>
          :<h3>У вас немає збережених фільмів!</h3>
          }
          </div>
          <button
          onClick={()=>navigate('/settings')}
          className='userPageButt1'
           >
          Налаштування
          </button>     
        </div>
        <div className='bottomOfUser'>
        <div>
          <h2>{userIn.name}</h2>
          <div>id: {userIn.id}</div>
          <div>email: {userIn.email}</div>
        </div>
          <div className='userPageButts'>
            <button
            className='userPageButt'
            onClick={exit}
            >
            Вийти
          </button>
          </div> 
        </div>
      </>
      }
    </div>
  )
}

export default UserPage