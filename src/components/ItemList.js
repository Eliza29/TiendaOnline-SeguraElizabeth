import Item from "./Item"

const ItemList = ({items}) => {
    
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-auto ">
           {items.map((item)=><Item key={item.id} item={item}/>)}
        </ul>
    )
}

export default ItemList
