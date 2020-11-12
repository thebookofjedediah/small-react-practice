import React, { useState } from 'react';

const NewTodoForm = ({ addTask }) => {

    const INITIAL_STATE = {
        task: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(formData.task);
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task</label>
            <input 
                type="text" 
                id="task"
                name="task" 
                placeholder="task name"
                value={formData.task}
                onChange={handleChange}
            />
            <button>Add Box</button>
        </form>
    )
}


export default NewTodoForm;