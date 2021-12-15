import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

const Item = ({item}) => {
    
    const onAdd = (counter) =>{
        console.log('agregaste'+ counter + 'producto(s) al carrito')           
    }
    return (
        <div className="border border-gray-100">
            <img src={item.pictureUrl} alt={item.title} className=" md:h-72 lg:h-64 w-full object-cover" />
            <div className="p-3">
                <div>{item.title}</div>
                <p> US$ {item.price}</p>
                <ItemCount  stock={item.stock} initial={1} onAdd={onAdd}/>
                <Link to={`/item/${item.id}`}> <button className="w-full mt-1 p-1 text-sm bg-gray-100">VER DETALLE</button>  </Link>
            </div>
        </div>

        
    )
}

export default Item
