import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting}) => {
    return (
        <div className="w-full p-4 mx-auto mt-20 lg:mt-16">  
            <h2>{greeting}</h2>
            <div>
                <ItemCount  stock={5} initial={1} />
            </div>
            
        </div>
    )
}

export default ItemListContainer
