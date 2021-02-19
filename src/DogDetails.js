import React from "react";
import { useParams } from 'react-router-dom';

function DogDetails() {
  const { name } = useParams();   // hold the name of the current dog (in url path)
  
  return (
    <h1>Hi</h1>
  )
}

export default DogDetails;