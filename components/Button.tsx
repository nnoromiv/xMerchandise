import React from 'react'
import { ButtonProps } from '../types'

const Button = ({ title ,image, customStyle, clickFunction } : ButtonProps) => {
  return (
    <button 
    type='submit'
    onClick={clickFunction}
    className={`${customStyle} cursor-pointer w-fit bg-primaryDarker text-general py-2 px-8 rounded-3xl hover:bg-general hover:text-primaryDarker`} >
      {title}
        {
            image ? <span className='ml-4'>&#8594;</span> : ''
        }
    </button>
  )
}

export default Button