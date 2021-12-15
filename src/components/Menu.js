import Nav from "./Nav"


const Menu = () => {
    return (
        <div className="md:hidden bg-black w-full block p-2 h-screen">
            <nav className="divide-y divide-white ">
               <Nav />
            </nav>
        </div>
    )
}

export default Menu
