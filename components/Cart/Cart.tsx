"use client"

import React, { useEffect, useState } from 'react'
import { NavigationProps, StorePropsContents } from '../../types'
import { BiCartAlt, BiWindowClose } from 'react-icons/bi'
import Image from 'next/image'
import { Button } from '..'
import { CartItems } from '../../constants'

const Cart = ({ show, handleMenu }: NavigationProps) => {
    const [items, setItems] = useState<StorePropsContents[]>(CartItems);

    let amount: number[] = []

    function handleTotal(): number[] {

        const result = items.map(item => amount.push(item.amount * item.itemPrice))

        if (result) { }

        return amount
    }

    function handleChange(index: number, event: React.ChangeEvent<HTMLInputElement>) {
        const result = CartItems.find(item => item.index === index)

        if (result) {
            result.amount = parseFloat(event.target.value)
        }

        setItems([...CartItems])
        handleTotal()
    }

    function handleIndividualTotal(index: number): number {
        const result = handleTotal()

        return parseFloat(result[index].toFixed(2))
    }

    function calculateSum() {
        let total = 0
        let result = handleTotal()

        if (result) {
            result = result.slice(0, items.length)
            total = result.reduce((total, amount) => total + amount, 0)
        }

        return parseFloat(total.toFixed(2))
    }

    function handleRemoval(index: number,itemIndex: number) {
        const result = items.find(item => item.index === itemIndex)

        if (result !== undefined) {   

            const newArray = [...items]
            newArray.splice(index, 1)

            setItems([...newArray])
        }

    }

    useEffect(() => {
        handleTotal()
    })


    return (
        <section className={`relative z-[98] flex flex-col gap-3 px-3 ${show ? 'ml-48' : 'ml-14'}  mt-6 max-[769px]:flex-col `}>
            <div className='ml-6 flex justify-between'>
                <BiCartAlt className='text-2xl cursor-pointer' onClick={handleMenu} />
                <Button title='Check Out' customStyle={`${show ? 'hidden' : 'flex'}`} />
            </div>
            <div className={`${show ? 'max-[426px]:blur-2xl max-[426px]:h-[100vh] max-[426px]:overflow-hidden' : ''} grid grid-cols-2 mt-10 gap-3 max-[1025px]:grid-cols-1`}>
                {
                    items.map((data, index) => (
                        <div key={data.index} className='mx-5 flex items-center gap-4 border-[1px] p-3  rounded-2xl max-[426px]:flex-col max-[426px]:mx-2'>
                            {
                                data.itemImage !== undefined &&
                                <Image priority src={data.itemImage} width={400} height={400} alt='' className='w-[380px] h-[380px] object-cover max-[768px]:w-[300px] max-[768px]:h-[300px] rounded-3xl' />
                            }
                            <div className='flex flex-col gap-3 mt-auto'>
                                <BiWindowClose className='ml-auto text-2xl cursor-pointer text-orangeRed z-[102]' onClick={() => handleRemoval(index, data.index)}/>

                                <h2 className='text-4xl text-primaryDarker font-semibold max-[321px]:text-2xl'>{data.itemName}</h2>
                                <p className='font-medium text-2xl max-[321px]:text-base'>Base Price: ${data.itemPrice}</p>
                                <input type="number" min={1} defaultValue={data.amount} autoFocus onChange={(e) => handleChange(data.index, e)} placeholder="1" className='h-full p-2 pl-4 w-fit max-[321px]:w-[150px] border rounded-full outline-none' />
                                <h1 className='font-extrabold text-3xl max-[321px]:text-xl'>
                                    Total: ${handleIndividualTotal(index)}
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