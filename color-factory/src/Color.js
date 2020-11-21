import React from 'react';
import {Link} from 'react-router-dom';

import './Color.css'

const Color = (props) => {
    return (
        <div className="Color" style={{backgroundColor: `${props.colorCode}`}}>
            <h1>{props.colorName}</h1>
            <Link to="/colors">GO BACK</Link>
        </div>
    )
}

export default Color;