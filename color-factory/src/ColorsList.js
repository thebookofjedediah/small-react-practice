import React from 'react';
import { Link } from 'react-router-dom';


const ColorsList = ({colors}) => {
    return (
        <div>
            <Link to="/colors/new">Add new color</Link>
            {Object.keys(colors).map(colorName => (
                <li key={colorName}>
                <Link to={`/colors/${colorName}`}>{colorName}</Link>
                </li>
            ))}
        </div>
    )
}

export default ColorsList;

// {props.colors.map(color => (
//     <Link to={`/colors/${color.colorName}`}>{color.colorName}</Link>
// ))}