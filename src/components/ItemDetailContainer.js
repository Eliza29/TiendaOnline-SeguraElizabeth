import { useEffect, useState } from "react"
import { useParams } from "react-router"
import {ReactComponent as Spin} from "../images/spin.svg"
import ItemDetail from "./ItemDetail"
import getItem from "../services/getItem"


const ItemDetailContainer = () => {

    const [loading, setloading] = useState(false)
    const [item, setitem] = useState({})
    const {id}= useParams()
    
    useEffect(() => {

        setloading(true)
        getItem().then((itemDetail)=>{
            setloading(false)
            const item = itemDetail.find(product => product.id === Number(id))
            setitem(item)
        })

    }, [id])

    return (
        <div className="w-full h-screen p-4 mx-auto max-w-screen-xl flex justify-center items-center">
            {loading?<Spin/>: <ItemDetail item={item}/> } 
        </div>
    )

}

export default ItemDetailContainer
