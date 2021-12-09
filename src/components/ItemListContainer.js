import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const ItemListContainer = ({greeting}) => {
    
    const [items, setitems] = useState([])

    useEffect(() => {

        const products = [
            {id: 1, title:'Mochila Ailsa', stock: 5, description:'Una colección imponente y elegante que se caracteriza por el contraste de color en cada una de sus piezas.', category:'mujer', price:'75', pictureUrl:'https://crepierweb.s3.amazonaws.com/uploads/2021/09/70031002803-MOCHILA-AILSA-CELESTE-1.jpg.jpg'},
            {id: 2, title:'Bucket Asira',stock: 6, description:'Una colección que destaca por sus detalles de eslabones cuadrados y textura soft', category:'mujer', price:'80', pictureUrl:'https://crepierweb.s3.amazonaws.com/uploads/2021/11/70012016556-CARTERA-ASIRA-NUDE-1.jpg'},
            {id: 3, title:'Mochila Dobson', stock: 5, description:'De nuestra línea Business, es perfecta para el hombre de negocios.', category:'hombre', price:'100', pictureUrl:'https://crepierweb.s3.amazonaws.com/uploads/2021/10/70031002663-MOCHILA-DOBSON-NEGRO-FRONTAL.jpg'},
            {id: 4, title:'Morral MRC', stock: 5, description:'Morral MRC, pertenece a nuestra línea casual', category:'hombre', price:'140', pictureUrl:'https://renzocosta.vteximg.com.br/arquivos/ids/170421/MORRAL_MRC-2156_BLACK_1.jpg?v=637731887187100000'},
            {id: 5, title:'Maleta Dura Berna', stock: 5, description:'Resistencia y seguridad, diseñada en material 100% ABS antiscratch', category:'viaje', price:'200', pictureUrl:'https://crepierweb.s3.amazonaws.com/uploads/2021/09/70026001432-MALETA-BERNA-28-VERDE-AZULADO-1.jpg.jpg'},
            {id: 6, title:'Maleta Dura Said', stock: 5, description:'Diseñada en material 100% ABS antiscratch, llega en colores neutros para acompañarte a todos lados.', category:'viaje', price:'180', pictureUrl:'https://crepierweb.s3.amazonaws.com/uploads/2021/11/70026001459-MALETA-SAID-19-ROSACLARO-1-1.jpg'}
        ]
        const promesa = new Promise((res, rej)=>{
            setTimeout(()=>{
                res(products)
            }, 2000)
        })
        
        promesa.then((items)=>setitems(items));

    }, [])
    
    return (
        <div className="w-full p-4 mx-auto mt-20 lg:mt-16 max-w-screen-xl">  
            <h2>{greeting}</h2>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer
