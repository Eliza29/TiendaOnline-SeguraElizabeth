import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import {context} from "../context/CartContext"


const ItemDetail = ({item}) => {

    const resultado = useContext(context)
    const [quantity, setquantity] = useState(0)
    

    const onAdd = (counter) =>{
        setquantity(counter)
        console.log('agregaste'+ counter + 'producto(s) al carrito')
    }
   
    return (
        <div className=" bg-gray-300 grid grid-cols-1 md:grid-cols-2 mt-60 sm:mt-10 lg:mt-16 lg:w-9/12 ">
            <div>
                <img src={item.pictureUrl} alt={item.title} className=" w-full object-cover" />
            </div> 
            <div className=" p-10">
                <p className="text-2xl font-semibold">{item.title}</p>
                <p className="text-base my-7"> {item.description} </p>
                <p className="text-xl font-semibold"> US$ {item.price} </p>
                {quantity===0 &&
                    <ItemCount  stock={item.stock} initial={1} onAdd={onAdd}/>
                }
                <Link to="/cart"> <button onClick={()=>resultado.addItem(item, quantity)} className="w-full mt-1 p-1 text-sm bg-gray-100">COMPRAR</button></Link>
               
            </div>
        </div>
    )
}

export default ItemDetail
