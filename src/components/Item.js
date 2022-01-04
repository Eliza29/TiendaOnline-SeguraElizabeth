import { Link } from "react-router-dom"

const Item = ({item}) => {
    
    return (
        <div className="border border-gray-100">
            <img src={item.pictureUrl} alt={item.title} className=" md:h-72 lg:h-64 w-full object-cover" />
            <div className="p-3">
                <div>{item.title}</div>
                <p> US$ {item.price}</p>
                <Link to={`/item/${item.id}`}> <button className="w-full mt-1 p-1 text-sm bg-pink-700 text-white">VER DETALLE</button>  </Link>
            </div>
        </div>

        
    )
}

export default Item
