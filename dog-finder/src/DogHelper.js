import React from "react"
import Dog from "./Dog";
import { useParams } from 'react-router-dom';


 function DogFinder({dogs}) {
  const { name } = useParams();

  const dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());

  return(
    <Dog dog={dog} />
  )
 }

 export default DogFinder;