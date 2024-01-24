"use client"

import React, { useState } from 'react'
import { NavigationProps } from '../../types'
import { BiCartAlt } from 'react-icons/bi'
import Image from 'next/image'
import { Button } from '..'
import { CartItems } from '../../constants'

const Cart = ({ show, handleMenu }: NavigationProps) => {
    const [amounts, setAmounts] = useState<number[]>(Array(CartItems.length).fill(0));

    function handleTotal(index: number, amount: number, baseAmount: number) {
        const total = amount * baseAmount;
        amounts[index] = total;
        return parseFloat(total.toFixed(2));
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>, index:number, amount:number, basePrice: number) {
        const inputValue = parseFloat(event.target.value);
        amount = inputValue;      
        const result =  handleTotal(index, amount, basePrice)
        setAmounts([...amounts]);
    }

    function calculateSum() {
        const result = amounts.reduce((total, amount) => total + amount, 0).toFixed(2);
        return result;
    }

    return (
        <section className={`relative z-[98] flex flex-col gap-3 px-3 ${show ? 'ml-48' : 'ml-14'}  mt-6 max-[769px]:flex-col `}>
            <div className='ml-6 flex justify-between'>
                <BiCartAlt className='text-2xl cursor-pointer' onClick={handleMenu} />
                <Button title='Check Out' customStyle={`${show ? 'hidden' : 'flex'}`} />
            </div>
            <div className={`${show ? 'max-[426px]:blur-2xl max-[426px]:h-[100vh] max-[426px]:overflow-hidden' : ''} grid grid-cols-2 mt-10 gap-3 max-[1025px]:grid-cols-1`}>
                {
                    CartItems.map((data, index) => (
                        <div key={index + data.index} className='mx-5 flex items-center gap-4 border-[1px] p-3  rounded-2xl max-[426px]:flex-col max-[426px]:mx-2'>
                            {
                                data.itemImage !== undefined &&
                                <Image src={data.itemImage} width={400} height={400} alt='' className='w-[380px] h-[380px] object-cover max-[768px]:w-[300px] max-[768px]:h-[300px] rounded-3xl' />
                            }
                            <div className='flex flex-col gap-3 mt-auto'>
                                <h2 className='text-4xl text-primaryDarker font-semibold max-[321px]:text-2xl'>{data.itemName}</h2>
                                <p className='font-medium text-2xl max-[321px]:text-base'>Base Price: ${data.itemPrice}</p>
                                <input type="number" min={1} defaultValue={data.amount} autoFocus onChange={(e) => handleChange(e, index + 1, data.amount, data.itemPrice)} placeholder="1" className='h-full p-2 pl-4 w-fit max-[321px]:w-[150px] border rounded-full outline-none' />
                                <h1 className='font-extrabold text-3xl max-[321px]:text-xl'>
                                    Total: ${amounts[index+1]}
                                </h1>
                            </div>
                        </div>
                    ))
                }
            </div>

            <h1 className='text-3xl flex mt-24 font-extrabold justify-center items-center max-[376px]:text-xl'>
                Sum Total: ${calculateSum()}
            </h1>
        </section>
    )
}

export default Cart