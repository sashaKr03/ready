import React, { useContext } from 'react'
import { Context } from '..';
import SideBar from './SideBar';
import './SideBarMenu.css'

interface sideBarMenuContext{
    menuVisible:boolean
    setMenuVisible:any
    sideVisible:boolean
    setSideVisible:any
}

const SideBarMenu:React.FC = () => {

    const {menuVisible, setMenuVisible, sideVisible, setSideVisible} = useContext<sideBarMenuContext>(Context)

    function sideBarMenuClick(){
        setMenuVisible()
        !sideVisible && setSideVisible()
    }

  return (
<div className='sideBarMenuCover'>
    <div>
        <button className='sideBarMenuButton' onClick={sideBarMenuClick}>
            Навігація
        </button>
    </div>
    <div className={menuVisible ? 'sideBarMenu' : 'sideBarMenu sideBarMenuActive'}>
        <div className='sibeBarMenuClose' onClick={setMenuVisible}>Закрити</div>
        <SideBar/>
    </div>
</div>
  )
}

export default SideBarMenu