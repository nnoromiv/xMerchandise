import Image from 'next/image'
import React from 'react'
import { OXFORD_1 } from '../images'
import { NavigationProps } from '../types'

const Ads = ({show} : NavigationProps) => {
  return (
    <div className={`${show ? 'ml-44 max-[426px]:blur-2xl max-[426px]:w-[50vw]' : 'ml-14'} bg-grey flex py-4 justify-center items-center gap-5 max-[769px]:flex-col`}>
        <div className=' hover:-translate-x-3 overflow-hidden rounded-2xl mx-3 border-[1px]'>
            <Image className='cursor-pointer object-contain ' src={OXFORD_1} alt="" width={440} height={100} />
        </div>
        <div className='w-1/2 text-center px-4 max-[769px]:w-full'>
            <h2 className='text-xs'>Exclusively available on X-merchandise</h2>
            <h1 className='text-5xl py-3 text-primaryDarker max-[426px]:text-3xl'>Oxford shoes 5</h1>
            <p className='text-xl max-[426px]:text-base'>The Oxford shoe 5 features a 40% better (than Loafers shoe ) BIG fluffy feels with adjustable toe length . So movement is best as it can be</p>
        </div>
    </div>
  )
}

export default Ads