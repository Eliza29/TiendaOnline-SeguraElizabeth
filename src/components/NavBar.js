import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <>
            <header className="w-full fixed top-0 bg-gray-50 flex justify-between p-4">
                Tienda Online
                <nav className="flex justify-evenly lg:space-x-6">
                    <a href="cat1">Mujeres</a>
                    <a href="cat2">Hombres</a>
                    <a href="cat3">Viajes</a>
                </nav>
                <CartWidget/>
            </header>
        
        </>
        
    )
}

export default NavBar

