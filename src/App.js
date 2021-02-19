import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
/** import dog images */
import dukeImg from "./img/duke.jpg";
import perryImg from "./img/perry.jpg";
import tubbyImg from "./img/tubby.jpg";
import whiskeyImg from "./img/whiskey.jpg";
// import Routes from "./Routes";
import './App.css';

function App({ dogs }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar dogs={dogs}/>
        <Switch>
          <Route exact path="/dogs" >
            <DogList dogs={dogs}/>
          </Route>
          <Route exact path="/dogs/:name">
            <DogDetails dogs={dogs}/>
          </Route>
          <Redirect to="/dogs" />  {/* matches if nothing above matched*/}
      </Switch>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskeyImg,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: dukeImg,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perryImg,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubbyImg,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
