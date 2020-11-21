import React from 'react';
import { NavLink } from 'react-router-dom'

import './Nav.css'

const Nav = (props) => {
    return (
        <nav className="Nav">
            <NavLink to="/dogs">Dogs</NavLink>
            {props.dogs.map(dog => (
                    <NavLink to={`/dogs/:${dog.name.toLowerCase()}`}>{dog.name}</NavLink>
                ))}
        </nav>
    )
}

export default Nav;