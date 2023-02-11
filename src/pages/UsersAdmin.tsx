import React, { useContext } from 'react'
import { user } from '../util/dataBase';
import AdminPanelUser from './../components/AdminPanelUser';
import { Context } from './../index';
import './UsersAdmin.css'

interface interUsers{
    allUsers:user[]
}

const UsersAdmin = () => {

    const {allUsers} = useContext<interUsers>(Context)

  return (
    <div className='userAdminPage'>
        {allUsers.map(e=>
            <AdminPanelUser key={e.id} adminUser={e}/>
        )}
        
    </div>
  )
}

export default UsersAdmin