import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { Context } from '..';
import FilmCard from '../components/FilmCard';
import { film } from '../util/dataBase';

const FilmsCountry = () => {
  const {films} = useContext<any>(Context)

    const location = useLocation()

    const countyFilms = [...films].filter((e:film)=>
    e.country.includes(location.state)
        );    

  return (
    
    <div><FilmCard arrayFilms={countyFilms}/></div>
  )
}

export default FilmsCountry