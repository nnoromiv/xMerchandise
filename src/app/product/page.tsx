"use client"

import React from 'react'
import { NavBar, Product } from '../../../components'
import { useToggler } from '../../../hooks'
import { BiMessageSquareDots } from 'react-icons/bi'

const Home = () => {
    const {handleMenu, show} = useToggler()
  
  return (
      <main className="h-[100vh] pt-20">
        <NavBar super={{ handleMenu, show, active:"product"}} pageIcon={<BiMessageSquareDots className='text-primaryDarker text-3xl' onClick={handleMenu} />} />
        <Product show={show}/>
      </main>
  )
}

export default Home