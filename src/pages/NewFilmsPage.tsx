import React, { useContext } from 'react'
import FilmCard from '../components/FilmCard';
import { Context } from './../index';
import { film } from './../util/dataBase';

const NewFilmsPage = () => {

    const {films} = useContext<any>(Context)

    const newFilms = [...films];    

    newFilms.sort((a:film,b:film)=>
    b.date.getFullYear()-a.date.getFullYear())

  return (
    
    <div><FilmCard arrayFilms={newFilms}/> </div>
  )
}

export default NewFilmsPage