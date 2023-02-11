import React from 'react'
import { film } from '../util/dataBase';
import star from '../img/star.png';
import './userFav.css'
import { Link, useNavigate } from 'react-router-dom';

const UserFav = (props:any) => {

  const navigate = useNavigate()

  return (
    <div className='userFavMain'>
        {props.films.map((e:any, i:number)=>
        <div key={i}>
            <div><img alt='Постер фільму' onClick={()=>navigate(`/${e.id}`)} src={e.img}/></div>
            <div className='userFilmContent'>
               <div className='userFilmInf'>
                <div><Link className='filmLink' to={`/${e.id}`}>{e.title}</Link></div>
               <div className='ratt'> <div>{e.rating}</div><img src={star} className='starImg'/></div>
               </div>
            </div>
        </div>
        )}
    </div>
  )
}

export default UserFav