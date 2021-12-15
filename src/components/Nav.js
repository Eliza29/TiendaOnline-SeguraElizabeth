import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <>
            <NavLink to="category/mujeres" className="block mt-1 p-4 text-white md:flex md:p-0 md:text-black md:mt-0">Mujeres</NavLink>
            <NavLink to="category/hombres" className="block mt-1 p-4 text-white md:flex md:p-0 md:text-black md:mt-0">Hombres</NavLink>
            <NavLink to="category/viajes"  className="block mt-1 p-4 text-white md:flex md:p-0 md:text-black md:mt-0">Viajes</NavLink>
        </>
    )
}

export default Nav
