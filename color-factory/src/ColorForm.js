import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'

const INITIAL_STATE = {
    name: "",
    color: "#000000"
}

const ColorForm = ({addColor}) => {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const history = useHistory();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {colorName, colorCode} = formData;
        addColor({ [colorName]: colorCode });
        history.push("/colors");
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                id="colorName" 
                name="colorName"
                value={formData.colorName}
                onChange={handleChange}
            />
            <input 
                type="color" 
                id="colorCode" 
                name="colorCode"
                value={formData.colorCode}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}

export default ColorForm;