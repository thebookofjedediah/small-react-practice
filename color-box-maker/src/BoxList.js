import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';

const BoxList = () => {
    const INITIAL_STATE = [
        {id: uuidv4(), width: 50, height: 50, bg: 'blue'},
        {id: uuidv4(), width: 70, height: 70, bg: 'red'}
    ]

    const [boxes, setBoxes] = useState(INITIAL_STATE);

    const addBox = (width, height, bg) => {
        setBoxes(boxes => [...boxes, {id: uuidv4(), width, height, bg}])
    }

    const removeBox = (n) => {
        console.log(n);
        setBoxes(boxes.filter(b => b.id !== n))
    }

    return (
        <>
        <NewBoxForm addBox={addBox} />
        <div>
            {boxes.map(({ id, width, height, bg }) => (
                <Box 
                    id={id} 
                    key={id} 
                    height={height} 
                    width={width} 
                    bg={bg} 
                    removeBox={removeBox}
                />
            ))}

        </div>
        </>
    )
}

export default BoxList;