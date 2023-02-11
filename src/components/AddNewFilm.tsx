import React, { useContext } from 'react'
import { Context } from '..';
import ModalWindow from './../UI/ModalWindow';
import { useState, useEffect, useRef } from 'react';
import Button from '../UI/Button';
import  './AddNewFilm.css'
import { film } from '../util/dataBase';
import NewFilmsGenres from './NewFilmsGenres';

interface addNewFilmProps {
    propsValue:boolean
    moduleClose: ()=>any
}

interface addNewFilmContext{
    genres:[]
    setFilms:any
    films:[film]
}

const AddNewFilm:React.FC<addNewFilmProps> = ({propsValue, moduleClose}) => {

    const {genres, setFilms, films} = useContext<addNewFilmContext>(Context)

    const [newFilmGenre, setNewFilmGenre] = useState<string>('')
    const [newFilmGenres, setNewFilmGenres] = useState<any>([])
            
    const [newFilmName, setNewFilmName] = useState<any>('')
    const [newFilmYear, setNewFilmYear] = useState<any>('')
    const [newFilmRating, setNewFilmRating] = useState<any>('')
    const [newFilmCountry, setNewFilmCountry] = useState<any>('')
    const [newFilmDate, setNewFilmDate] = useState<any>({})
    const [newFilmDescribe, setNewFilmDescribe] = useState<any>('')
    const newFilmImg = useRef<any>()
    const [newFilmVid, setNewFilmVid] = useState<any>('')

    function addNewFilmFunc (e:MouseEvent){
        e.preventDefault()
        if(newFilmGenres.length===0 || newFilmYear==='' || newFilmRating==='' || newFilmCountry==='' || newFilmDate.length===0 || newFilmDescribe==='' || newFilmImg.current.value===''){
            alert('Не всі поля були заповнені')
        }else{
            setFilms([...films, 
                {
                id: films[films.length-1].id + 1,
                title:newFilmName,
                year:newFilmYear,
                country:newFilmCountry,
                genres:newFilmGenres,
                date:new Date(newFilmDate),
                rating:newFilmRating,
                img:newFilmImg.current.value,
                describe:newFilmDescribe,
                video: newFilmVid
            }
        ])
            moduleClose();
            // setNewFilmGenres([]);
            // setNewFilmGenre('');
            // setNewFilmYear('');
            // setNewFilmRating('');
            // setNewFilmCountry('');
            // setNewFilmName('');
            // setNewFilmDate({});
            // setNewFilmDescribe('');
            // setNewFilmVid('');
            // newFilmImg.current.value=''
        }
    }

    useEffect(()=>{
    if(newFilmGenre!=='' && !newFilmGenres.includes(newFilmGenre)){
    setNewFilmGenres([...newFilmGenres, newFilmGenre])
    }}
    ,[newFilmGenre])

  return (
    <ModalWindow value={propsValue} moduleClose={moduleClose}>
        <form>
        <label>Назва фільму: </label>
        <input
            value={newFilmName}
            onChange={e=>setNewFilmName(e.target.value)}
        />
        <p><label>Рік випуску: </label>
        <input
            value={newFilmYear}
            onChange={e=>setNewFilmYear(e.target.value)}
        />
        </p>
        <p><label>Рейтинг: </label>
        <input
            value={newFilmRating}
            onChange={e=>setNewFilmRating(e.target.value)}
        />
        </p>
        <p><label>Країна: </label>
        <input
            value={newFilmCountry}
            onChange={e=>setNewFilmCountry(e.target.value)}
        />
        </p>
        <label>
        Жанри:
        <NewFilmsGenres 
        newFilmGenres={newFilmGenres} 
        setNewFilmGenres={setNewFilmGenres}
        />
        </label>
        <label>Вибрати жанри: </label>  
            <select 
            value={newFilmGenre}
            onChange={e=>setNewFilmGenre(e.target.value)}
            >
                {genres.map(e=>
                    <option key={e}>
                        {e}
                    </option>
                )}
            </select>
        <p><label>Дата прем'єри: </label>
        <input
            type={'date'}
            value={newFilmDate}
            onChange={e=>setNewFilmDate(e.target.value)}
        />
        </p>
        <p><label>Опис фільму: </label>
        <textarea
            value={newFilmDescribe}
            onChange={e=>setNewFilmDescribe(e.target.value)}
        />
        </p>
        <p><label>Постер фільму: </label>
        <input 
            type={'file'}
            ref={newFilmImg}
        />
        </p>
        <p><label>Фільм: </label>
        <input 
            type={'file'}
            value={newFilmVid}
            onChange={e=>setNewFilmVid(e.target.value)}
        />
        </p>
        <p className='addNewFilmButt'><Button onClick={addNewFilmFunc}>Додати фільм</Button></p>
        </form>
    </ModalWindow>
  )
}

export default AddNewFilm