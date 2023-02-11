import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import FilmPage from './pages/FilmPage';
import Main from './pages/Main';
import Top from './pages/Top';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import { Context } from './index';
import NewFilmsPage from './pages/NewFilmsPage';
import SettingsPage from './pages/SettingsPage';
import SearchPage from './pages/SearchPage';
import AdminPanel from './pages/AdminPage';
import UsersAdmin from './pages/UsersAdmin';
import { user } from './util/dataBase';
import FilmsGenre from './pages/FilmsGenre';
import FilmsYears from './pages/FilmsYears';
import FilmsCountry from './pages/FilmsCountry';

interface Cont{
  isAuth:boolean
  userIn:user
}

const Routess = () => {

  const {isAuth, userIn} = useContext<Cont>(Context)

  return (
    <>
      {isAuth
    ? 
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/new' element={<NewFilmsPage/>}/>
      <Route path='/top' element={<Top/>}/>
      <Route path='/:id' element={<FilmPage/>}/>
      <Route path='/user' element={<UserPage/>}/>
      <Route path='/settings' element={<SettingsPage/>}/>
      <Route path='/search' element={<SearchPage/>}/>
      {userIn.adminStatus &&
        <>
        <Route path='/adminPanel' element={<AdminPanel/>}/>
        <Route path='/usersAdmin' element={<UsersAdmin/>}/>
        </>}
      <Route path='/filmsYears' element={<FilmsYears/>}/>
      <Route path='/filmsGenre' element={<FilmsGenre/>}/>
      <Route path='/filmsCountry' element={<FilmsCountry/>}/>
      <Route path="*" element={<Navigate to='/' replace/>}/>
    </Routes> 
      :
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/new' element={<NewFilmsPage/>}/>
      <Route path='/top' element={<Top/>}/>
      <Route path='/:id' element={<FilmPage/>}/>
      <Route path='/reg' element={<LoginPage/>}/>
      <Route path='/search' element={<SearchPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/filmsGenre' element={<FilmsGenre/>}/>
      <Route path='/filmsYears' element={<FilmsYears/>}/>
      <Route path='/filmsCountry' element={<FilmsCountry/>}/>
      <Route path="*" element={<Navigate to='/' replace/>}/>
    </Routes> 
      }
      </>
  )
}

export default Routess