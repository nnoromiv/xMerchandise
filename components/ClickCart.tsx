import React from 'react'
import { BiCartAlt } from 'react-icons/bi'
import { CartFunctionProps, StorePropsContents } from '../types'
import { useCart } from './CartProvider'


const ClickCart = ({index, cartImage, cartName, cartPrice, amount}: CartFunctionProps) => {

  const { clickFunction } = useCart()

  const cartItems = {index, cartImage, cartName, cartPrice, amount}  

  return (
    <BiCartAlt 
      onClick={() => clickFunction(cartItems)}
    className='bg-primaryDarker text-general text-4xl p-1 rounded-md cursor-pointer mr-2'
     />
  )
}

export default ClickCart