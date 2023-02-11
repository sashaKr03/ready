import React from 'react'
import './FilmCard.css'
import { Link } from 'react-router-dom'
import { film } from '../util/dataBase'
import star from '../img/star.png'
import LinkNav from './LinkNav'

interface filmCardProps {
  arrayFilms:film[]
  }



const FilmCard:React.FC<filmCardProps> = (props:any) => {

  const windowWidth = window.innerWidth

  return (
    <div className='filmCardPage'>{props.arrayFilms.map((e:film,i:number)=>
        <div className='back' key={i} >
        <div className='h'>
        <Link className='filmLink' to={`/${e.id}`}>
            <h1 >{e.title} ({e.year})</h1>
         </Link>
            <div className='cardRating'>{e.rating} 
            <img src={star} alt='Зірка' className='starImg'/>
            </div>
        </div>
            <div className='filmContent'>
            <Link className='filmLink' to={`/${e.id}`}>
            <img src={e.img} alt={e.title}/>
            </Link>
            <div>
                <p>Рік випуску:<LinkNav classN='filmCardGenre' link='/filmsYears'>{e.year}</LinkNav> </p>
                <p>Країна: {e.country}</p>
                <p>
                  Жанр: {e.genres.map((el,i)=>
                  <span key={i}>
                    <LinkNav classN='filmCardGenre' link='/filmsGenre'>{el}</LinkNav>
                    <span> {i!==e.genres.length-1 ? '/' : ''} </span>
                  </span>
                  )}
                </p>
                <p>Дата прем'єри: {e.date.toLocaleString('ua',{month: 'long',year: 'numeric',day: 'numeric'})}</p>
                {windowWidth>850 && <p className='desc'>{e.describe.substr(0,400)+'...'}</p>}
            </div>
            </div>
            {windowWidth<850 && <p className='desc'>{e.describe.substr(0,400)+'...'}</p>}
        </div>  
        )}
        </div>
  )
}

export default FilmCard