"use client"
import { Search, SideBar } from '.'
import { SearchProps } from '../types'

const NavBar = ({super: {handleMenu, show, active}, pageIcon}: SearchProps,) => {
  return (
    <div className=''>
        <Search super={{ handleMenu:handleMenu, show:show}} pageIcon={pageIcon}   />
        <SideBar show={show} active={active}/>
    </div>
  )
}

export default NavBar