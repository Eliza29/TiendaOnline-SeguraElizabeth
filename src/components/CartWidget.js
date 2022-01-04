import { MdShoppingCart } from "react-icons/md";
import { useContext } from "react"
import {context} from "../context/CartContext"

const CartWidget = () => {
    const contexto = useContext(context)
    const {carrito} = contexto

    console.log(carrito, 'carrito en cart,')
    let total = carrito.reduce(function (acc, actual){
        return acc + actual.cantidad
    }, 0)

    return (
        <div className="inline-flex">
           
            <MdShoppingCart size="1.4rem"/> 
            {
                total !== 0 && <span>{total}</span>
            }
            
        </div>
    )
}

export default CartWidget
