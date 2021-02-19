import React from "react";
import { useParams, Redirect } from 'react-router-dom';
import "./DogDetails.css";

function DogDetails({ dogs }) {
  const { name } = useParams();   // hold the name of the current dog (in url path)
  const [ dog ] = dogs.filter(dog => dog.name === name);

  if (!dog) return <Redirect to="/dogs"/>

  return (
    <div className="DogDetails">
      <p>Name: {dog.name}</p>
      <p>Age: {dog.age}</p>
      <ul className="DogDetails-ul">Facts about {dog.name}
        {dog.facts.map(fact => {
          return <li className="DogDetails-li">{fact}</li>
        })}
      </ul>
      <div className="DogDetails-ImgContainer">
        <img src={`${dog.src}`} alt="dog"/>
      </div>
    </div>
  )
}

export default DogDetails;