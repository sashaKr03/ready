import React, { useContext } from 'react'
import './AdminPage.css'
import { useNavigate } from 'react-router-dom';
import { useToggle } from '../hooks/useToggle';
import ModuleWindow from '../UI/ModalWindow';
import { useState } from 'react';
import Button from '../UI/Button';
import { Context } from '..';
import AddNewFilm from '../components/AddNewFilm';

interface sideBarContext{
  setGenres:any
  setYears:any
  setCountries:any
  genres:[string]
  years:[string]
  countries:[string]
}

const AdminPanel = () => {

    const navigate = useNavigate()

    const [modalVisible, setModalVisible] = useToggle()
    const [addModalVisible, setAddModalVisible] = useToggle()

    const[newNavType, setNewNavType] = useState('Виберіть')
    const[newNavInp, setNewNavInp] = useState('')

    const {setGenres, setYears, setCountries, genres, years, countries} = useContext<sideBarContext>(Context)

    function addNav(){
      if(newNavInp==='' || newNavInp===' '){
        alert('Введіть назву навігації')
      }else{
        if(newNavType==='Виберіть'){
          alert('Виберіть категорію')
        }
        if(newNavType==='Жанр'){
          setGenres([...genres, newNavInp])
        }
        if(newNavType==='Рік'){
          setYears([...years, newNavInp])
        }
        if(newNavType==='Країна'){
          setCountries([...countries, newNavInp])
        }
        setNewNavInp('')
        setNewNavType('Виберіть')
      }
    }

  return (
    <div className='adminPage'>
      <AddNewFilm propsValue={addModalVisible} moduleClose={setAddModalVisible}/>
      <ModuleWindow value={modalVisible} moduleClose={setModalVisible}>
        <label
        htmlFor='newNav'
        >
          Назва навігації: 
        </label>
        <input
         name='newNav'
         value={newNavInp}
         onChange={e=>setNewNavInp(e.target.value)}
         />
        <p>
          <label>Категорія:</label>
          <select
          value={newNavType}
          onChange={e=>setNewNavType(e.target.value)}
          >
            <option disabled >Виберіть</option>
            <option>Жанр</option>
            <option>Рік</option>
            <option>Країна</option>
          </select>
        </p>
        <p><Button onClick={addNav}>Додати навігацію</Button></p>
      </ModuleWindow>
        <div className='adminPageButtons'>
            <button onClick={setAddModalVisible}>Добавити фільм</button>
            <button onClick={()=>navigate('/usersAdmin')}>Користувачі</button>
            <button onClick={setModalVisible}>Добавити навігацію</button>
        </div>
    </div>
  )
}

export default AdminPanel