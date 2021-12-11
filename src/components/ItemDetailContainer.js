import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import getItem from "../services/getItem"
import {ReactComponent as Spin} from "../images/spin.svg"


const ItemDetailContainer = () => {

    const [loading, setloading] = useState(false)
    const [item, setitem] = useState({})
    
    useEffect(() => {
        setloading(true)
        getItem().then(item =>{
            setloading(false)
            setitem(item)
        })

    }, [])

    
    return (
        <div className="w-full h-screen p-4 mx-auto max-w-screen-xl flex justify-center items-center">
            {loading?<Spin/>: <ItemDetail item={item}/> } 
        </div>
    )

}

export default ItemDetailContainer
