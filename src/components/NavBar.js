import CartWidget from "./CartWidget"
import { MdMenu, MdClose } from "react-icons/md"
import Menu from "./Menu"
import { useState } from "react"


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <>
            <header className="w-full fixed top-0 bg-gray-50 flex justify-center flex-wrap">
                <div className="flex justify-between p-4 max-w-screen-xl w-full">
                    <span className="md:hidden" onClick={handleIsOpen}> 
                       {isOpen? <MdClose size="1.4rem"/> : <MdMenu size="1.4rem"/> }
                    </span>
                    <span className="">Tienda Online</span>
                    <nav className="hidden md:flex justify-evenly lg:space-x-6">
                        <a href="cat1">Mujeres</a>
                        <a href="cat2">Hombres</a>
                        <a href="cat3">Viajes</a>
                    </nav>
                    <CartWidget/>
                </div> 
                {isOpen && <Menu/> }          
            </header>
            
        
        </>
        
    )
}

export default NavBar

