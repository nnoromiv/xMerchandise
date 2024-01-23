"use client"

import { BiGridAlt } from "react-icons/bi"
import { Content, NavBar, Stats } from "../../../components"
import { useToggler } from "../../../hooks"

const Home = () => {
    const {handleMenu, show} = useToggler()
  return (
    <div className="pb-20 overflow-hidden bg-grey">
        <NavBar super={{ handleMenu:handleMenu, show:show, active:"dashboard"}} pageIcon={<BiGridAlt className='text-primaryDarker text-3xl cursor-pointer' onClick={handleMenu} />}  />
        <Stats show={show}/>
        <Content show={show}/>
    </div>
  )
}

export default Home