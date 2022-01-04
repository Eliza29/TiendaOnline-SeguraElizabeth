import { useContext } from "react"
import {context} from "../context/CartContext"
import { MdDelete } from "react-icons/md"
import { Link } from "react-router-dom"

const Cart = () => {

    const contexto = useContext(context)
    const {carrito} = contexto
    console.log(contexto, 'contexto')
    console.log(carrito, 'carrito en cart,')
    let total = carrito.reduce(function (acc, actual){
        return acc + actual.cantidad* actual.price
    }, 0)

    return (
        <div className="w-full h-screen p-4 mx-auto max-w-screen-xl mt-16">
            <p className="text-center">CARRITO DE COMPRAS</p>
            {
                carrito.length !==0 ?
                <div className=" grid grid-cols-1 md:grid-cols-3 mt-60 sm:mt-10 lg:mt-16  mx-auto">
                <div className="col-span-2 ">
                    <table className="">
                        <thead>
                            <tr>
                                <th className="w-1/2">Nombre de Producto</th>
                                <th className="w-1/6">Precio x unidad</th>
                                <th className="w-1/6">Cantidad</th>
                                <th className="w-1/6">Subtotal</th>
                                <th className="w-1/6">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                carrito.map(item=>{
                                    return (                                     
                                        <tr key={item.id}>
                                            <td className="text-center">{item.title}</td>
                                            <td className="text-center">{item.price}</td>
                                            <td className="text-center">{item.cantidad}</td>
                                            <td className="text-center">{item.cantidad * item.price} </td>
                                            <td onClick={()=>contexto.removeItem(item.id)}> <MdDelete size="1.4rem"/> </td>
                                        </tr>
                                    )                               
                                })   
                            }
                        </tbody>
                    </table>
                </div>
                <div className=" bg-gray-50 p-7">
                    Suma total: US$ {total}
                </div>
            </div>
            :
            <div className="mt-10"> 
                <p>Aún no tienes productos en tu carrito</p>
                <Link to="/"> <button className="mt-1 py-1 px-4 text-sm bg-pink-700 text-white">IR AL INICIO</button></Link>

            </div>
            }
            
        </div>
    )
}

export default Cart
