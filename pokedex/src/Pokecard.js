import React from 'react';
import './Pokecard.css';

function Pokecard(props) {

    let pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
    
    return(
        <div className="Pokecard">
            <h2 className="Pokecard-name">{props.name}</h2>
            <img className="Pokecard-img" src={pokeImg} />
            <p className="Pokecard-type">Type: {props.type}</p>
            <p className="Pokecard-exp">Exp: {props.exp}</p>
        </div>
    )
}

export default Pokecard;