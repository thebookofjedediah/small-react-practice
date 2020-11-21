import React from "react";
import { Link } from 'react-router-dom'

const Dogs = (props) => {
    console.log(props)
    return (
        <div className="Dogs">
        {props.dogs.map(dog => (
            <h2><Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link></h2>
        ))}
        </div>
    )
}

export default Dogs;