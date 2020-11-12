import React from 'react';

const Box = ({id, width, height, bg, removeBox}) => {

    return (
        <div style={{display: "block"}}>
        <div style={{
            display: "inline-block",
            width: `${width}px`, 
            height: `${height}px`, 
            backgroundColor: `${bg}`}}>
        </div>
        <button id={id} onClick={(e) => removeBox(e.target.id)}>X</button>
        </div>
    )
}

export default Box;