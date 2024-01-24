import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { CartItems } from "../../constants";

export function handleClick(index: number, amount: number, itemPrice: number, itemImage?: string | StaticImport, itemName?: string,  ){
    const newItem = {
        index: index,
        amount: amount,
        itemImage: itemImage,
        itemName: itemName,
        itemPrice: itemPrice
    };

    const identicalItem = CartItems.find((item) => item.index === newItem.index)

    if(identicalItem){
        identicalItem.amount+=1
    } else {
        CartItems.push(newItem)
    }

    return CartItems
}