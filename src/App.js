import React from "react";
import NavBar from "./components/nav-bar/NavBar";
import {action,originals} from './urls'
import './App.css'
import Banner from "./components/Banner/Banner";
import Rowpost from "./components/RowPost/Rowpost";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Rowpost url={originals} title='Netflix Originals'/>
      <Rowpost url={action} title='Action Movies' isSmall />
    </div>
  );
}

export default App;
