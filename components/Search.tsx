"use client"

import Link from 'next/link'
import React from 'react'
import { BiCartAlt, BiMenu, BiSearchAlt, BiX } from 'react-icons/bi'
import { SearchProps } from '../types'
import { useCart } from './CartProvider'


const Search = ({super: {handleMenu, show}, pageIcon}: SearchProps) => {

  const { cartNumber } = useCart()

  return (
    <section className={` ${show ? 'ml-44' : 'ml-14'} top-0 left-0 h-12 fixed z-[100] flex items-center justify-between p-4 py-9 bg-general  `} >
        {
        show ?
          <BiX className='text-primary text-2xl cursor-pointer'  onClick={handleMenu} />
        :        
          pageIcon === undefined ? <BiMenu className='text-primary text-2xl cursor-pointer' onClick={handleMenu} /> : pageIcon  
                
        } 
        <div className="h-10 flex items-center overflow-x-hidden max-[426px]:hidden">
            <BiSearchAlt className='mr-5 text-lg max-[769px]:hidden' />
            <input type="search" autoFocus placeholder="Search for products on X-M" className='h-full p-2 pl-4 w-[500px] border rounded-full outline-none' />
        </div>

        <Link href="cart" className='flex'>
            <BiCartAlt className='text-2xl' />
            <sub className='text-sm text-primaryDarker'>{cartNumber}</sub>
        </Link>
    </section>
  )
}

export default Search