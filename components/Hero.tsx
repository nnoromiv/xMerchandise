import Image from 'next/image'
import React from 'react'
import { HOME } from '../images'
import { Button } from '.'
import { NavigationProps } from '../types'

const Hero = ({show} : NavigationProps) => {
    return (
        <section className={`${ show ? 'ml-44 max-[426px]:blur-2xl max-[426px]:h-[100vh] max-[426px]:overflow-hidden' : 'ml-14'} relative z-[90] h-[70vh] mt-12 bg-grey flex items-center justify-around gap-8 max-[426px]:flex-col `}>
            <div className='flex flex-col gap-3'>
                <h1 className='text-7xl font-bold leading-normal max-[1024px]:text-5xl max-[769px]:text-3xl max-[426px]:text-2xl'>Get Your Body <br />The Best Style!</h1>
                <Button title='Explore Now' image/>
            </div>
            <div className="w-[500px] max-[1024px]:w-[400px] max-[769px]:w-[300px] max-[426px]:w-[200px]">
                <Image src={HOME} width={500} height={100} alt="" />
            </div>
        </section>
    )
}

export default Hero