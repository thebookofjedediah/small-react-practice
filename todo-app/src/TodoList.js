import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
    const INITIAL_STATE = [
        {id: uuidv4(), task: "Water Plants"},
        {id: uuidv4(), task: "Wash Dog"}
    ]

    const [todos, setTodos] = useState(INITIAL_STATE);

    const addTask = (task) => {
        setTodos(todos => [...todos, {id: uuidv4(), task}])
    }

    const removeTodo = (n) => {
        console.log(n);
        setTodos(todos.filter(t => t.id !== n))
    }

    return (
        <>
        <NewTodoForm addTask={addTask} />
        <ul>
            {todos.map(({ id, task }) => (
                <Todo id={id} task={task} removeTodo={removeTodo}/>
            ))}
        </ul>
        </>
    )
}

export default TodoList;