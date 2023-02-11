import React, {FC, useContext} from 'react'
import './SideBar.css'
import LinkNav from './LinkNav';
import { Context } from './../index';

interface sideBarContext{
    genres:[string]
    years:[string]
    countries:[string]
    menuVisible:boolean
    setMenuVisible:any
}

const SideBar:FC = () => {

    const {genres, years, countries, menuVisible, setMenuVisible} = useContext<sideBarContext>(Context)

    function closeSideNav(){
        !menuVisible && setMenuVisible()
    }

  return (
    <div className='navigate'>
    <div className='title'>Навігація</div>
        <div className='pos'>
        <div>
        <hr/>
        <div className='title2'>Жанри</div>
        <div className='allGenres'>
        {genres.map((e,i)=>
            <div onClick={closeSideNav} key={i}><LinkNav link='/filmsGenre'>{e}</LinkNav></div>
            )}
        </div>
        </div>

        <div>
        <hr/>
        <div className='title2'>Роки</div>
        <div className='allCat'>
        {years.map((e,i)=>
             <div onClick={closeSideNav} key={i}><LinkNav link='/filmsYears'>{e}</LinkNav></div>
            )}
        </div>

        <div>
        <hr/>
        <div className='title2'>Країни</div>
        <div className='allCat'>
        {countries.map((e,i)=>
            <div onClick={closeSideNav} key={i}><LinkNav link='/filmsCountry'>{e}</LinkNav></div>
            )}
        </div>
        </div>
        </div>
        </div>
         </div>
  )
}

export default SideBar;