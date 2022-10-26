import './App.scss';
// import beersData from "./data/beersData.jsx"
import { useState, useEffect } from "react";

import BeerTiles from "./containers/BeerTiles/BeerTiles.jsx"
import Button from "./components/Button/Button.jsx"
import Nav from './containers/Nav/Nav';
import SearchBar from './containers/SearchBar/SearchBar';

const App = () => {
  const [punks, setPunks] = useState([]);
  const [filterBy, setFilterBy] = useState("all")

  let punkUrl = {
    inUseURL: `https://api.punkapi.com/v2/beers?per_page=80`
  }

  const getPunks = async () => {
    let url = punkUrl.inUseURL;
    const res = await fetch(url);
    const data = await res.json();
    setPunks(data);
    console.log(punks)
};

const handleClick = (event) => {
  setFilterBy(event.target.value);
};

  useEffect(() => {
    getPunks();
  },[]);


  return (
    <div className='container'>
        
      <div className="navbar">
        <h2>Search Bar</h2>
        <Nav
        onChange={handleClick}
        selected={filterBy}
        options={["ABV > 6%", "Classic (Brewed before 2010)", "Acidic (pH > 4)"]}
        caption="Select User Gender:"
        
      />
        <h4>Beers returned = {punks.length}</h4>
      </div>

        <SearchBar punksArry={punks}/>

        


      {/* <div className="container__beer-tiles">
        <BeerTiles beersArry={punks}/>
      </div> */}

    </div>
  );
}

export default App;
