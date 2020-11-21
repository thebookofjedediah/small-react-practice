import React from "react";
import { Redirect } from 'react-router-dom';

import './Dog.css'

const Dog = ({dog}) => {

    if (!dog) return <Redirect to="/dogs"/>
    
    return (
        <div className="Dog">
            <h2>{dog.name}</h2>
            <p>{dog.age}</p>
            <img src={dog.src} />
            <ul>
                {dog.facts.map(fact => (
                    <li>{fact}</li>
                ))}
            </ul>
        </div>
    )
}

export default Dog;