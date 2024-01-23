import React, { ReactNode } from 'react'
import { BiClipboard, BiRocket, BiUser, BiWallet } from 'react-icons/bi'
import { NavigationProps } from '../../types'

type StatisticsProps = {
  number: string,
  type: string,
  icon: ReactNode
}
type Statistics = {
  statistics: StatisticsProps[]
  customStyle?: string
}
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

const StatCard = ({statistics, customStyle} : Statistics) => {
  return(
    statistics.map((stat, index) => (
      <div key={index} className={`${ customStyle } cursor-pointer p-10 flex justify-between items-center w-[320px] max-[1025px]:w-[280px] max-[768px]:w-[320px] max-[426px]:w-[98%]`}>
        <div>
          <h1 className={`font-medium text-4xl`}>{stat.number}</h1>
          <p className='text-primary'>{stat.type}</p>
        </div>
        {stat.icon}
      </div>
    ))
  )
}

const Stats = ({show} : NavigationProps) => {
  return (
    <div className={` ${show ? 'ml-44 max-[426px]:blur-2xl max-[426px]:h-[100vh] max-[426px]:overflow-hidden' : 'ml-14'} relative grid grid-cols-4 justify-between gap-5 max-[1025px]:grid-cols-3 max-[769px]:grid-cols-2 max-[426px]:grid-cols-1 pt-28 px-3 z-[90]`}>
      <StatCard statistics={STATS} customStyle='bg-general last:bg-primaryDarker last:text-general'/>
    </div>
  )
}

export default Stats