import { Store } from ".."
import { CartItems, PRODUCT } from "../../constants"
import { NavigationProps } from "../../types"

const Product = ({show} : NavigationProps) => {
    return (        
        PRODUCT.map((item,index) => (
            <Store CartItems={CartItems} super={{show}} key={index} storeTitle={item.storeTitle} storeItems={item.storeItems}/>
        ))        
    )
}

export default Product