/* eslint-disable array-callback-return */
import React, { FC, useContext } from 'react'
import { Context } from '..'
import { film, user } from '../util/dataBase'
import { useParams } from 'react-router-dom'
import './FilmPage.css'
import CommentCard from '../components/CommentCard'
import star from '../img/star.png'
import LinkNav from '../components/LinkNav'

    interface interContext {
        films:[]
        isAuth:boolean
        userIn: user | any
        setUserIn: any
        allUsers:user[]
        setAllUsers:any
    }

const FilmPage:FC = () => {

    const params = useParams()

    function filmIsFav (el:film){
        if(userIn?.name){
        if(userIn.favFilms.find((e:film)=>e.id===el.id)){
            return true
        }else{return false}}
    }

    const {isAuth, films, userIn, setUserIn, allUsers, setAllUsers}:interContext = useContext(Context)
    
    function cantAddFav(){
        alert('Ви повинні бути авторизовані для цього')
    }

    function addToFav(el:film){
        if(!userIn.favFilms.find((e:film)=>e.id===el.id)){
        setUserIn({...userIn, favFilms:[...userIn.favFilms, el]})
        setAllUsers( allUsers.map((e,i)=>{
            if(e.id===userIn.id){
                return {...userIn, favFilms:[...userIn.favFilms, el]}
            }else{return {...e}}
        })
        )
    }
    }       

    function removeFromFav (el:film){
        const userFavFilter = userIn.favFilms.filter((e:film)=>e.id!==el.id)
        setUserIn({...userIn, favFilms:userFavFilter})
    }
    
  return (
    <>
    {films.map((e:film)=>{
        if(e.id===Number(params.id)){
            return (
        <div className='fPage' key={e.id}>
            <div className='back'>
                <div className='h'>
        <div className='filmLink'>
            <h1 >{e.title} ({e.year})</h1>
         </div>
            <div className='ratt'>{e.rating} 
            <img src={star} alt='Зірка' className='starImg'/>
            </div>
        </div>
            <div className='contentPage'>
            <img className='filmPageImg' src={e.img} alt={e.title}/>
            <div>
                <p>Рік випуску: <LinkNav classN='filmCardGenre' link='/filmsYears'>{e.year}</LinkNav></p>
                <p>Країна: {e.country}</p>
                <p>Жанр: {e.genres.map((el,i)=>
                  <span key={i}>
                        <LinkNav classN='filmCardGenre' link='/filmsGenre'>{el}</LinkNav>
                        <span> {i!==e.genres.length-1 ? '/' : ''} </span>
                  </span>
                  )}</p>
                <p>Дата прем'єри: {e.date.toLocaleString('ua',{month: 'long',year: 'numeric',day: 'numeric'})}</p>
                {filmIsFav(e)
                ?<button onClick={()=>removeFromFav(e)} className='removeFromFav'>Видалити з улюблених</button>
                :<button onClick={isAuth?()=>addToFav(e):cantAddFav} className='addToFav'>Додати в улюблені</button>
                }
            </div>
            </div>
            <p className='descPage'>{e.describe}</p>
            <h1 className='center'>Дивитись {e.title} ({e.year}) у хорошій якості</h1>
            <div className='center' >
            <video src='../video/videoplayback.mp4' width="100%" height="200%" controls={true} autoPlay={true} muted={true} />
            </div>
            <hr/>
            <div>
                <h2>Коментарі:</h2>
                <CommentCard filmId={e.id}/>
            </div>
        </div>  
        </div>
    )}})}
    </>
  )
}

export default FilmPage