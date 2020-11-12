import React, { useState } from 'react';

const NewBoxForm = ({ addBox }) => {

    const INITIAL_STATE = {
        width: '',
        height: '', 
        bg: ''
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
        addBox(formData.width, formData.height, formData.bg);
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width</label>
            <input 
                type="text" 
                id="width"
                name="width" 
                placeholder="box width"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="height">Height</label>
            <input 
                type="text" 
                id="height"
                name="height" 
                placeholder="box height"
                value={formData.height}
                onChange={handleChange}
            />
            <label htmlFor="bg">Background Color</label>
            <input 
                type="text" 
                id="bg"
                name="bg" 
                placeholder="background color"
                value={formData.bg}
                onChange={handleChange}
            />
            <button>Add Box</button>
        </form>
    )
}


export default NewBoxForm;