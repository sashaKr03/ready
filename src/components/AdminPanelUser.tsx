/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState } from 'react'
import { user, userIn } from '../util/dataBase'
import './AdminPanelUser.css'
import Button from './../UI/Button';
import ModuleWindow from '../UI/ModalWindow';
import { useToggle } from '../hooks/useToggle';
import { Context } from '..';
import pencil from '../img/pencil.png'

interface interAdminPanelUser{
    adminUser:user
}

interface Con{
    allUsers: user[]
    setAllUsers: any
    userIn:user
    setUserIn:any
}

interface uss{
    us:userIn
}

const AdminPanelUser:React.FC<interAdminPanelUser> = ({adminUser}) => {

    const {allUsers, setAllUsers, userIn, setUserIn} = useContext<Con>(Context)

    const [visible, setVisible] = useToggle()
    const [delAccVisible, setDelAccVisible] = useToggle()

    const [userLogin, setUserLogin] = useState(adminUser.name)
    const [userPassword, setUserPassword] = useState(adminUser.password)
    const [userAdminStatus, setUserAdminStatus]:boolean | any = useState(adminUser.adminStatus)

    function editUser(e:React.FormEvent<HTMLButtonElement>){
        e.preventDefault()

        allUsers.map(e=>{
            if(adminUser.id===userIn.id){
                setUserIn({
                    name:userLogin,
                    password:userPassword,
                    adminStatus:userAdminStatus,
                    email:e.email,
                    id:e.id,
                    userImg:e.userImg,
                    favFilms:e.favFilms
                })
            }})

        setAllUsers(allUsers.map(e=>{
            if(e.id===adminUser.id){
                return{
                    name:userLogin,
                    password:userPassword,
                    adminStatus:userAdminStatus,
                    email:e.email,
                    id:e.id,
                    userImg:e.userImg,
                    favFilms:e.favFilms
                }
            }else{
                return e
            }
    }))
    setVisible()
    }    

    const delAcc = ()=>{
            setAllUsers(allUsers.filter(e=>e.id!==adminUser.id))
    }

    function delAccVis (e:React.FormEvent<HTMLButtonElement>){
        e.preventDefault()
        setDelAccVisible()
    }

    function setDelAccVisibleF(e:React.FormEvent<HTMLButtonElement>){
        e.preventDefault()
        setDelAccVisible()
    }

  return (
    <div className='adminPanelUser'>
        <ModuleWindow value={visible} moduleClose={setVisible}>
            <p><label>Логін:  </label>
            <input
            value={userLogin}
            onChange={e=>setUserLogin(e.target.value)}
            />
            </p>
            <p><label>Пароль:  </label>
            <input
            value={userPassword}
            onChange={e=>setUserPassword(e.target.value)}
            />
            </p>
            <p>
            <label htmlFor='admStat'>Адмін статус</label>
            <input
            type='radio'
            name='admStat'
            className='admStat'
            checked={userAdminStatus}
            onClick={()=>setUserAdminStatus(!userAdminStatus)}
            readOnly
            />
            </p>
            <p ><Button onClick={setDelAccVisibleF} className='userDelButton'>Видалити аккаут</Button></p>
            <p><button onClick={editUser} className='adminSaveUserButt'>Зберегти зміни</button></p>
        </ModuleWindow>
        <ModuleWindow value={delAccVisible} moduleClose={setDelAccVisible}>
            <h3>Ви впевненні, що хочете видалити аккаут "{adminUser.name}"?</h3>
            <p className='delUserYes'>
                <Button onClick={delAcc}>Так</Button>
                <Button onClick={delAccVis}>Ні</Button>
            </p>
        </ModuleWindow>
        <div>{adminUser.id}.{adminUser.name.length>7 ? adminUser.name.substr(0,8)+'...' : adminUser.name}</div> |
        <div>{adminUser.email.length>7 ? adminUser.email.substr(0,12)+'...' : adminUser.email}</div> |
        <div>Пароль:{adminUser.password}</div> |
        <div className='adminPageStatus'>
            Адмін статус: 
            {adminUser.adminStatus 
            ? 
            <div className='adminUsersGreen'></div> 
            : 
            <div className='adminUsersRed'></div>
            }
            </div> |
        <button className='editUserButt' onClick={setVisible}><img src={pencil}/></button>
    </div>
  )
}

export default AdminPanelUser