import React, { useContext } from 'react'
import { Context } from './../index';
import { film } from './../util/dataBase';
import FilmCard from './../components/FilmCard';
import'./SearchPage.css'

interface search{
    searchQueryRef:any,
    films:film[]
}

const SearchPage:React.FC = () => {

    const {searchQueryRef, films}:search = useContext(Context) 
    
    const searchFilm = films.filter((e:film)=>
      e.title.toLowerCase().includes(searchQueryRef.current.value.toLowerCase())
      


    )

  return (
    <div className='searchPage'>
      {searchFilm.length>0
      ? <FilmCard arrayFilms={searchFilm}/>
      : <div className='noFilms'><h1 >Фільмів по запиту '{searchQueryRef.current.value}' не знайденно</h1></div>
      }
    </div>
  )
}

export default SearchPage