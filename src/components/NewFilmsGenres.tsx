import React from 'react'
import './NewFilmsGenres.css'

interface newFilmsGenresProps{
    newFilmGenres:[string]
    setNewFilmGenres:any
}

const NewFilmsGenres:React.FC<newFilmsGenresProps> = ({newFilmGenres, setNewFilmGenres}) => {
  return (
    <div className='newFilmsGenresCover'>
        {newFilmGenres.map(e=>
        <div key={e} className='newFilmsGenres'>
            <span>{e}</span>
            <div onClick={()=>setNewFilmGenres([...newFilmGenres].filter(el=>e!==el))}>X</div>
        </div>
            )}
            </div>
  )
}

export default NewFilmsGenres