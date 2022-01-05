import { MdShoppingCart } from "react-icons/md"
import { useContext } from "react"
import {context} from "../context/CartContext"
import { Link } from "react-router-dom"


const CartWidget = () => {
    const contexto = useContext(context)
    const {carrito} = contexto

    console.log(carrito, 'carrito en cart,')
    let total = carrito.reduce(function (acc, actual){
        return acc + actual.cantidad
    }, 0)

    return (
        <div className="inline-flex">
            <Link to="/cart"> 
                <MdShoppingCart size="1.4rem"/> 
            </Link>
            {
                total !== 0 && <span>{total}</span>
            }
            
        </div>
    )
}

export default CartWidget
