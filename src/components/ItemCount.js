import { useEffect, useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setcounter] = useState(initial)
    const [disabled, setdisabled] = useState(false)

    useEffect(() => {

        stock > 0? setdisabled(false):setdisabled(true)

    }, [stock])

    const addNumber = () =>{
        if(counter < stock){
            setcounter(counter + 1) 
        }
    }

    const decreaseNumber = () =>{
        if( counter > initial){
            setcounter(counter - 1) 
        }
    }
    
    return (
        <div>
            <div className="flex space-x-3 mb-2 p-1 mt-3 text-sm font-medium border border-gray-100 bg-white">
                <button className="w-1/3 flex items-center justify-center" onClick={decreaseNumber}>-</button>
                <span className="w-1/3 flex items-center justify-center">{counter}</span>
                <button className="w-1/3 flex items-center justify-center" onClick={addNumber}>+</button>
            </div>
            <button className={`w-full text-white p-1 text-sm bg-pink-700 ${ disabled?"disabled:opacity-30":"hover:bg-pink-800"}`} disabled={disabled} onClick={()=> onAdd(counter)}>
                AGREGAR AL CARRITO
            </button>
        </div>
    )
}

export default ItemCount
