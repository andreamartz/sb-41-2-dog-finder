import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ dogs }) {
  return (
    <nav className="Navbar">
      <NavLink className="Navbar-NavLink" exact to="/dogs">Home</NavLink>
      {dogs.map(dog => {
        return (
          <NavLink className="Navbar-NavLink" exact to={`/dogs/${dog.name}`}>
            {dog.name}
          </NavLink>
        )
      })}
    </nav>
  )
}

export default Navbar;