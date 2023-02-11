import React, { FC, useRef } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import SideBar from './components/SideBar'
import Routess from './Routess'
import './components/SideBar.css'
import { Context } from '.'
import './App.css'
import { useState } from 'react';
import { dataFilms, user, users } from './util/dataBase'
import SideBarMenu from './components/SideBarMenu'
import { useToggle } from './hooks/useToggle'


const App:FC = () => {

  const userBasicImg ='https://img.myloview.fr/stickers/profil-icone-vecteur-avatar-personne-utilisateur-masculin-dans-l-illustration-de-pictogramme-glyphe-couleur-plat-700-121123314.jpg'

  const [allUsers, setAllUsers] = useState([...users])
  const [films, setFilms] = useState([...dataFilms])

  const [isAuth, setIsAuth] = useState(false)
  
  const [userIn, setUserIn] = useState<user | unknown>({})

const [menuVisible, setMenuVisible] = useToggle()
const [sideVisible, setSideVisible] = useToggle()

  const searchQueryRef = useRef()

  const [genres, setGenres] = useState([
    'Боєвик',
    'Екшн',
    'Пригоди',
    'Драми',
    'Фантастика',
    'Фентезі',
    'Комедія',
    'Музичні',
    'Сімейні',
    'Вестерн',
    'Жахи',
    'Новинки',
    'Кримінал',
    'Романтичні',
])

const [years, setYears] =useState([
    '1995',
    '2010',
    '1975',
    '2014',
    '2020',
    '2021',
    '2022',
])

years.sort((a:any,b:any)=>
a-b
)

const [countries, setCountries] = useState([
    'Україна',
    'США',
    'Німеччина',
    'Японія',
    'Іспанія',
    'Канада',
    'Велика Британія',  
])


  return (
    
    <Context.Provider
     value={{
      films, setFilms, isAuth, setIsAuth, userIn, setUserIn, allUsers, setAllUsers, searchQueryRef, countries, setCountries, years, setYears, genres, setGenres, menuVisible, setMenuVisible, sideVisible, setSideVisible
    }}
    >
      <Header/>
      <Nav/>
      <SideBarMenu/>
      <div className='main-side'><SideBar/> <Routess/></div>
    </Context.Provider>
  )
}

export default App