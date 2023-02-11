import React, { KeyboardEvent, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './LoginPage.css'
import { Context } from '..';
import { useState } from 'react';
import { user } from './../util/dataBase';
import { Key } from 'readline';
import { keyboardKey } from '@testing-library/user-event';


const LoginPage = () => {
    
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [loginValue, setLoginValue] = useState('')

  const location = useLocation() 
  const navigate = useNavigate()  

  const {setIsAuth, setUserIn, allUsers, setAllUsers} = useContext<any>(Context)
    
  
  function setLogin (){
    if(passwordValue!=='' || emailValue!==''){
      if(allUsers.find((e:user)=>e.email===emailValue)){
        const us = allUsers.find((e:user)=>e.email===emailValue)        
        if(us?.password===passwordValue){
          setIsAuth(true)
          setUserIn(us)
          navigate('/')
        }else{alert('Не вірний пароль!')}
      }else{alert('Користувача з цією поштою не знайдено!')}
    }else{
      alert('Ви не ввели логін і пароль!')
    }
  }

  function goodPassword (pass:string){
    if (pass.length>4){
      return true
    }return false
  }

  
  const userBasicImg ='https://img.myloview.fr/stickers/profil-icone-vecteur-avatar-personne-utilisateur-masculin-dans-l-illustration-de-pictogramme-glyphe-couleur-plat-700-121123314.jpg'



  function newUser(){
    if(!allUsers.find((e:user)=>e.name===loginValue)){
      if(!allUsers.find((e:user)=>e.email===emailValue)){
        if(goodPassword(passwordValue)){
          const newUserId = allUsers[allUsers.length-1].id+1
          const newUser = {
            id:newUserId, 
            name:loginValue, 
            email:emailValue, 
            password:passwordValue, 
            adminStatus:false, 
            userImg:userBasicImg,
            favFilms:[]
          }
          setAllUsers([
            ...allUsers,
            newUser
          ])
          setUserIn(newUser);
          setIsAuth(true)
          navigate('/')
          }else{alert('Пароль має мати мінімум 5 символів')}
        }else{alert('Користувач з такою поштою вже існує')}
      }else{alert('Користувач з таким логіном вже існує')}
    }
  
//     function keyDown (e:KeyboardEvent<HTMLInputElement>){
//       if (location.pathname==='/reg'){
//         if(e.key='Enter'){
//           newUser()
//         }
//       }else{
//         if(e.key='Enter'){
//           setLogin()
//         }
//       }
//     }

  return (
    <div className='auth'>
        <div className='authContent'>
        <h2>{location.pathname==='/reg' ? "Реєстрація" : 'Авторизація'}</h2>
            {location.pathname==='/reg' 
            && <div>
            <label htmlFor='login'>Логін:</label>
            <input
            value={loginValue}
            onChange={e=>setLoginValue(e.target.value)}
             name='login'
             type='text'
            />
            </div>
        }
        <div>
          <label htmlFor='email'>Пошта:</label>
          <input 
          value={emailValue}
          onChange={e=>setEmailValue(e.target.value)}
          name='email' 
          type='email'
          />
          </div>
        <div>
          <label htmlFor='password'>Пароль:</label>
          <input 
          value={passwordValue}
          onChange={e=>setPasswordValue(e.target.value)}
          name='password' 
          type='password'
          />
          </div>
        {
          location.pathname==='/reg' ?
            <div><button onClick={newUser}>Реєстрація</button></div>
            :
            <div><button onClick={setLogin}>Авторизація</button></div>
        }
        </div>
    </div>
  )
}

export default LoginPage
