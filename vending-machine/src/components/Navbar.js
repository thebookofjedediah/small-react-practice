import React from 'react';
import { NavLink } from 'react-router-dom'

import './Navbar.css'


const Navbar = () => {

    return (
        <nav className="Navbar">
            <NavLink exact to="/">Vend</NavLink>
            <NavLink exact to="/chips">Chips</NavLink>
            <NavLink exact to="/popcorn">Popcorn</NavLink>
            <NavLink exact to="/Soda">Soda</NavLink>
        </nav>
    )
}

export default Navbar;