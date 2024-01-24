import React from 'react'
import { BiClipboard, BiRocket, BiUser, BiWallet } from 'react-icons/bi'
import { NavigationProps } from '../../types'
import { StatisticsCard } from '..'

const STATS = [
  {
    number: `51`,
    type: 'Customers',
    icon: <BiUser className='text-6xl text-primaryDarker'/>
  },
  {
    number: `79`,
    type: 'Projects',
    icon: <BiRocket className='text-6xl text-primaryDarker'/>
  },
  {
    number: `127`,
    type: 'Orders',
    icon: <BiClipboard className='text-6xl text-primaryDarker'/>
  },
  {
    number: `$6k`,
    type: 'Income',
    icon: <BiWallet className='text-6xl text-general'/>
  }
]

const Statistics = ({show} : NavigationProps) => {
  return (
    <div className={` ${show ? 'ml-44 max-[426px]:blur-2xl max-[426px]:h-[100vh] max-[426px]:overflow-hidden' : 'ml-14'} relative grid grid-cols-4 justify-between gap-5 max-[1025px]:grid-cols-3 max-[769px]:grid-cols-2 max-[426px]:grid-cols-1 pt-28 px-3 z-[90]`}>
      <StatisticsCard statistics={STATS} customStyle='bg-general last:bg-primaryDarker last:text-general'/>
    </div>
  )
}

export default Statistics