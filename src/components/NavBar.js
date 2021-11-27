import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <>
            <header className="w-full fixed top-0 bg-gray-50 flex justify-between p-4">
                Tienda Online
                <nav className="flex justify-evenly lg:space-x-6">
                    <a href="cat1">Categoria 1</a>
                    <a href="cat2">Categoria 2</a>
                    <a href="cat3">Categoria 3</a>
                </nav>
                <CartWidget/>
            </header>
        
        </>
        
    )
}

export default NavBar

