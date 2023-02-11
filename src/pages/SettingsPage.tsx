import React, { FC, useContext, useRef, useState } from 'react'
import ModuleWindow from '../UI/ModalWindow'
import './SettingPage.css'
import { userIn } from './../util/dataBase';
import { Context } from './../index';
import { user } from './../util/dataBase';
import { useToggle } from '../hooks/useToggle';
import Button from '../UI/Button';
import AlertWindow from './../UI/AlertWindow';

interface context extends userIn {
  setAllUsers:any
  allUsers:[]
  setUserIn:any
}

const SettingsPage:FC = () => {

  const {userIn, setAllUsers, allUsers, setUserIn} = useContext<context>(Context)

  const [newLogin,setNewLogin] = useState(userIn.name)
  const [newPassword1, setNewPassword1] = useState('')
  const [newPassword2, setNewPassword2] = useState('')
  const [alertWindowText, setAlertWindowText] = useState('')

  const newImg = useRef<any>()

  const [alertVisible, setAlertVisible] = useToggle()
  const [loginVisble, setLoginVisble] = useToggle()
  const [passwordVisble, setPasswordVisble] = useToggle()
  const [imgVisble, setImgVisble] = useToggle()

  function changeLogin (){
    if(allUsers.find((e:user)=>e.name===newLogin)){
      alert('Це імя зайняте')
  }else{
    setLoginVisble()
    setAlertWindowText('Ваш логін було зміненно')
    setAlertVisible()
    setAllUsers( allUsers.map((e:user)=>{
    if(e.id===userIn.id){
        setUserIn({...userIn, name:newLogin})
        return {...userIn, name:newLogin}
    }else{return {...e}}
    
})
)}}    

  function changePassword (){
    if(newPassword1.length>4){
      if(newPassword2===newPassword1){
        setUserIn((e:user)=>{return {...e, password:newPassword1}})
    setAllUsers( allUsers.map((e:user)=>{
      if(e.id===userIn.id){
  return {...userIn, password:newPassword1} 
      }else{return {...e}}
  })
  )
  setAlertWindowText('Ваш пароль було зміненно')
  setPasswordVisble()
  setAlertVisible()
      }else{alert('Паролі не співпадають')}
    }else{alert("Довжина пароля має бути більша 5 символів")}
  }
  if(!alertVisible){
    setTimeout(()=>setAlertVisible()
    ,3000)
  }

  function changeImg(){
    setUserIn({...userIn, userImg:newImg.current.value})
    setAllUsers(allUsers.map((e:user,i:number)=>{
      if(e.id===userIn.id){
        return{
          ...userIn, userImg: newImg.current.value
        }
      }else{return e}
    }
    ))
    setImgVisble()
  }
  
  
  return (
    <div className='settingPage'>
      <AlertWindow value={alertVisible}>
        {alertWindowText}
      </AlertWindow>
      <ModuleWindow value={loginVisble} moduleClose={setLoginVisble}>
      <div className='changeLogin'>
        Ваш логін: {userIn.name}
        <p><label>Змінити логін:</label>
        <input
        value={newLogin}
        onChange={e=>setNewLogin(e.target.value)}
         />
         </p>
         <div  className='ButtomCenter'>
        <Button
        onClick={changeLogin}
        >
        Змінити логін
        </Button>
        </div>
      </div>
    </ModuleWindow> 
    <ModuleWindow value={passwordVisble} moduleClose={setPasswordVisble}>
      <label>Новий пароль:  </label>
      <input 
      type='password'
      placeholder='Пароль'
      value={newPassword1}
      onChange={e=>setNewPassword1(e.target.value)}
      />
      <p><label>Повторіть новий пароль:  </label>
      <input 
      type='password'
      placeholder='Пароль'
      value={newPassword2}
      onChange={e=>setNewPassword2(e.target.value)}      
      /></p>
      <div className='ButtomCenter'>
      <Button onClick={changePassword}>
        Змінити пароль
      </Button>
      </div>
    </ModuleWindow>
    <ModuleWindow value={imgVisble} moduleClose={setImgVisble}>
      <input 
      type={'file'}
      ref={newImg}
      />
      <p><Button onClick={changeImg}>Змінити фото</Button></p>
    </ModuleWindow>
    <div className='settingContent'>
      <div className='settingButtoms'>
      <button
      onClick={setLoginVisble}
      >
        Змінити ім'я
      </button>
      <button
      onClick={setPasswordVisble}
      >
        Змінити пароль
      </button>
      <button onClick={setImgVisble}>
        Змінити фото профілю
      </button>
      </div>
      </div>
      
    </div>
  )
}

export default SettingsPage