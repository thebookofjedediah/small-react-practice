import React from 'react';

const Todo = ({id, task, removeTodo}) => {
    return (
        <li key={id}>
            <span>{task}</span>
            <button id={id} onClick={(e) => removeTodo(e.target.id)}>X</button>
        </li>
    )
}

export default Todo;