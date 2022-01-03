import { createContext, useState } from "react"

export const context = createContext()
const {Provider} = context


const CartContext = ({children}) => {
   
    const [carrito, setcarrito] = useState([])
    // const [cantidad, setcantidad] = useState(0)

    const addItem=(item, quantity)=>{
     
        if (isInCart(item)){

            const addQuantity = carrito.map((product)=>{
                const newquantity =  product.cantidad + quantity
          
                if( item.id === product.id){
                    return {...product, cantidad: newquantity }
                }else{
                    return {...product}
                }
            })
            setcarrito(addQuantity)

        }else{

            const newItem = {...item, cantidad: quantity}
            setcarrito([...carrito, newItem])
        }
        
    }
    const removeItem=(itemId)=>{
        const newCart = carrito.filter(product=> product.id !== itemId)
        setcarrito(newCart)
    }
    const clear=()=>{
        console.log('clear')
        setcarrito([])
    }
    const isInCart=(item)=>{
        return carrito.find(producto => Number(producto.id) === item.id)? true:false    
    }

    const valorContexto= {
        carrito,
        // quantity,
        addItem,
        removeItem,
        clear,
        isInCart
    }
    return (
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}

export default CartContext
