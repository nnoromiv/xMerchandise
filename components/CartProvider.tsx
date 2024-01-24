"use client"

import React, { createContext, useContext, useState } from 'react'
import { handleClick } from '@/page';
import { CartItems } from '../constants';
import { CartFunctionProps } from '../types';

const CartContext = createContext({
    cartNumber: 0,
    clickFunction: ({ index, cartImage, cartName, cartPrice, amount }: CartFunctionProps): void => {}
})

export const CartProvider = ({children} : any) => {
    const [cartNumber, setCartNumber] = useState(0);

    const clickFunction = ({ index, cartImage, cartName, cartPrice, amount }: CartFunctionProps) => {
        handleClick(index, amount, cartPrice, cartImage, cartName);
        
        // The state update might not be reflected immediately, so use a callback
        setCartNumber( prevCartNumber => {
          const newCartNumber = CartItems.length;
          console.log(CartItems)
          return newCartNumber;
        });
      };

    return (
        <CartContext.Provider value={{ cartNumber, clickFunction }}>
          {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    return useContext(CartContext);
};
