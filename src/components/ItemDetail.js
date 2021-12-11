import ItemCount from "./ItemCount"


const ItemDetail = ({item}) => {
    console.log(item, 'item')
    const onAdd = (counter) =>{
        console.log('agregaste'+ counter + 'producto(s) al carrito')           
    }
   
    return (
        <div className=" bg-gray-300 grid grid-cols-1 md:grid-cols-2 mt-20 lg:mt-16 lg:w-9/12 ">
            <div>
                <img src={item.pictureUrl} alt={item.title} className=" w-full object-cover" />
            </div> 
            <div className=" p-10">
                <p className="text-2xl font-semibold">{item.title}</p>
                <p className="text-base my-7"> {item.description} </p>
                <p className="text-xl font-semibold"> US$ {item.price} </p>
                <ItemCount  stock={item.stock} initial={1} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail
