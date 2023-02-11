import React, { useContext } from 'react'
import { Context } from '..'
import { film } from './../util/dataBase';
import FilmCard from './../components/FilmCard';

const Top = () => {

  const {films} = useContext<any>(Context)

  const topFilms = [...films]

  topFilms.sort((a:film,b:film)=>
    b.rating-a.rating
  )

  return (
    <div><FilmCard arrayFilms={topFilms}/></div>
  )
}

export default Top