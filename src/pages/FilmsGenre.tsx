import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { Context } from '..';
import FilmCard from '../components/FilmCard';
import { film } from './../util/dataBase';

const FilmsGenre = () => {
    const {films} = useContext<any>(Context)

    const location = useLocation()

    const genreFilms = [...films].filter((e:film)=>
    e.genres.includes(location.state)
        );    

  return (
    
    <div><FilmCard arrayFilms={genreFilms}/> </div>
  )
}

export default FilmsGenre