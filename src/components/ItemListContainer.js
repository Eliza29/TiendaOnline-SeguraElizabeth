import { useEffect, useState } from "react"
import { useParams } from "react-router"
import {ReactComponent as Spin} from "../images/spin.svg"
import ItemList from "./ItemList"
import getItem from "../services/getItem"

const ItemListContainer = () => {
    
    const [loading, setloading] = useState(false)
    const [items, setitems] = useState([])
    const {id}= useParams()

    useEffect(() => {

        setloading(true)
        if(!id){           
            getItem().then((items)=> {
                setloading(false)
                setitems(items)
            })
        }else{
            getItem().then((items)=>{
                setloading(false)
                const itemsByCategory = items.filter(item => item.category===id)
                setitems(itemsByCategory)
            })
        }
       
    }, [id])
    
    return (
        <div className="w-full md:h-screen p-4 mx-auto max-w-screen-xl mt-12">  
            {loading? <div className=" w-full h-screen flex justify-center items-center"><Spin/></div>:<ItemList items={items}/> }       
        </div>
    )
}

export default ItemListContainer
