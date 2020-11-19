import { useState } from 'react';
import axios from 'axios';
import uuid from "uuid";

const useAxios = (url) => {
    const [value, setValue] = useState([]);
  
    const addElement = async (name = '') => {
      const response = await axios.get(`${url}/${name}`);
  
      setValue(oldValue => [...oldValue, {...response.data, id: uuid()}]);
    };
  
    const emptyElements = () => setValue([]);
  
    return [value, addElement, emptyElements];
  }

export default useAxios;
