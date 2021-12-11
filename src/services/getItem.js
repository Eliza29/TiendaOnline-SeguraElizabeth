const product = {
    id: 1, 
    title:'Mochila Ailsa', 
    stock: 5, 
    description:'Una colección imponente y elegante que se caracteriza por el contraste de color en cada una de sus piezas.', 
    category:'mujer', 
    price:'75.00', 
    pictureUrl:'https://crepierweb.s3.amazonaws.com/uploads/2021/09/70031002803-MOCHILA-AILSA-CELESTE-1.jpg.jpg'
}

const getItem = () => {
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(product)
        }, 2000)
    })
}

export default getItem
