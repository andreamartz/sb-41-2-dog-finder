import React from "react";
import { useParams } from 'react-router-dom';
import DogDetails from "./DogDetails";

function FilterDogDetails({ dogs }) {
  const { name } = useParams();   // hold the name of the current dog (in url path)
  const [ dog ] = dogs.filter(dog => dog.name === name);

  return (
    <DogDetails dog={dog} />
  )
}

export default FilterDogDetails;