import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { Context } from '..';
import FilmCard from '../components/FilmCard';
import { film } from '../util/dataBase';

const FilmsYears = () => {
    const {films} = useContext<any>(Context)

    const location = useLocation()

    const genreFilms = [...films].filter((e:film)=>
    e.year===location.state
        );    

  return (
    <div><FilmCard arrayFilms={genreFilms}/> </div>
  )
}

export default FilmsYears