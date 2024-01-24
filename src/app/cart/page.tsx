"use client"

import React from 'react'
import { Cart, SideBar } from '../../../components'
import { useToggler } from '../../../hooks'

const Home = () => {
    const {handleMenu, show} = useToggler()
  return (
    <main>
        <SideBar show={show} />
        <Cart show={show} handleMenu={handleMenu} />
    </main>
  )
}

export default Home