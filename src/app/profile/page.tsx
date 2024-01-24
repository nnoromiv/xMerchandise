"use client"

import { BiUser } from "react-icons/bi"
import {  NavBar, Profile } from "../../../components"
import { useToggler } from "../../../hooks"

const Home = () => {
    const { handleMenu, show } = useToggler()
      return (
        <main className="h-[100vh] pt-20 bg-grey">
            <NavBar   super={{ handleMenu, show, active:"profile" }} pageIcon={<BiUser className='text-primaryDarker text-3xl cursor-pointer' onClick={handleMenu} />} />
            <Profile />
        </main>
    )
}

export default Home