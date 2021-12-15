import { useState } from "react"
import { MdMenu, MdClose } from "react-icons/md"
import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import Menu from "./Menu"
import Nav from "./Nav"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () =>{
        setIsOpen(!isOpen)
    }

    return (
        
        <header className="w-full fixed top-0 bg-gray-50 flex justify-center flex-wrap">
            <div className="flex justify-between p-4 max-w-screen-xl w-full">
                <span className="md:hidden" onClick={handleIsOpen}> 
                    {isOpen? <MdClose size="1.4rem"/> : <MdMenu size="1.4rem"/> }
                </span>
                <NavLink  to="/">Tienda Online</NavLink>
                <nav className="hidden md:flex justify-evenly md:space-x-6">
                    <Nav/>
                </nav>
                <CartWidget/>
            </div> 
            {isOpen && <Menu/> }          
        </header>

    )
}

export default NavBar

