import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";


function DogList( { dogs }) {
  return (
    <div className="DogList">
      {dogs.map(dog => {
        return (
          <div className="DogList-DogContainer">
            <Link className="DogList-Link" to={`/dogs/${dog.name}`}>
              <img src={dog.src} alt={`${dog.name} the dog`}/>
              <p>{dog.name}</p>
            </Link>    
          </div>
        )
      })}
    </div>
  )
}

export default DogList;