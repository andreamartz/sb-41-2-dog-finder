import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ dogs }) {
  return (
    <nav>
      {dogs.map(dog => {
        return (
          <NavLink exact to={`/dogs/${dog.name}`}>
            {dog.name}
          </NavLink>
        )
      })}
    </nav>
  )
}

export default Navbar;