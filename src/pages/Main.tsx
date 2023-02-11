/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useContext, useMemo,} from 'react'
import FilmCard from '../components/FilmCard'
import { Context } from './../index';

const Main:FC = () => {

  const {films} = useContext<any>(Context)

  const randomFilms = useMemo(()=> [...films].sort(() => Math.random() - 0.5),
  [])  
  
  return (
    <div><FilmCard arrayFilms={randomFilms}/></div>
  )
}

export default Main