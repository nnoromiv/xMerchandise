import Image from 'next/image'
import React from 'react'
import { BiCartAlt } from 'react-icons/bi'
import { StoreProps } from '../types'

const Store: React.FC<StoreProps> = ({ super: { show }, storeTitle, storeItems }) => {
    return (
        <div className={`py-8 ${show ? 'ml-44 max-[426px]:blur-2xl max-[426px]:w-[50vw]' : 'ml-14'}`}>
            <div className="px-5">
                <div className="flex flex-col gap-3 justify-center items-center">
                    <h1 className="text-4xl text-primaryDarker font-normal max-[426px]:text-2xl">{storeTitle}</h1>
                    <hr className='w-20 border-[2px] border-primary rounded-full' />
                </div>

                <div className="grid grid-cols-3 gap-3 mt-3 justify-center place-items-center max-[1024px]:grid-cols-2 max-[746px]:grid-cols-1">
                    {
                        storeItems.map((item, index) => (
                            <div key={index} className={`${show ? 'max-[769px]:w-[260px]' : 'max-[769px]:w-[330px]'} ${show ? 'max-[1024px]:w-[390px]' : 'max-[1024px]:w-[440px]'} max-[376px]:w-[280px] max-[321px]:w-[230px]`}>
                                <div className='h-[250px] hover:-translate-y-3 overflow-hidden rounded-2xl border-[1px]'>
                                    <Image className='cursor-pointer object-contain ' src={item.itemImage} alt="semo and vegetable" width={440} height={100} />
                                </div>
                                <div className='mt-3 px-2 flex justify-between'>
                                    <div>
                                        <h3 className="text-lg font-medium max-[426px]:text-base">{item.itemName}</h3>
                                        <span className="text-primary text-base font-bold">${item.itemPrice}</span>
                                    </div>
                                    <BiCartAlt className='bg-primaryDarker text-general text-4xl p-1 rounded-md cursor-pointer mr-2' />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Store