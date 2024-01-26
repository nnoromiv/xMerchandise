"use client"

import React, { useState } from 'react'
import { BiCartAlt, BiCheck } from 'react-icons/bi'
import { CartFunctionProps } from '../types'
import { useCart } from './CartProvider'


const ClickCart = ({ index, cartImage, cartName, cartPrice, amount }: CartFunctionProps) => {

  const [clicked, setClicked] = useState<boolean>(false)
  const { clickFunction } = useCart()

  const cartItems = { index, cartImage, cartName, cartPrice, amount }

  const delayedFunction = () => {
    setClicked(false);
  };

  const handleClick = () => {
    clickFunction(cartItems)
    setClicked(true)
    setTimeout(delayedFunction, 2000);
  }

  return (
    !clicked ?
      <BiCartAlt
        onClick={handleClick}
        className='bg-primaryDarker text-general text-4xl p-1 rounded-md cursor-pointer mr-2'
      />
      : <BiCheck
        className='bg-grey text-general text-4xl p-1 rounded-md cursor-pointer mr-2 '
      />

  )
}

export default ClickCart