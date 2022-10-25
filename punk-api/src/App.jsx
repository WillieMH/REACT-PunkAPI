import './App.scss';
// import beersData from "./data/beersData.jsx"
import { useState } from "react";

import BeerTiles from "./containers/BeerTiles/BeerTiles.jsx"
import Button from "./components/Button/Button.jsx"
import Nav from './containers/Nav/Nav';
import SearchBar from './containers/SearchBar/SearchBar';

const App = () => {
  const [punks, setPunks] = useState([]);

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

const returnCheckBox = (event) => {
  if (event.target.checked) {
    if (event.target.value === "abv") {
      getPunks(punkUrl.inUseURL = `https://api.punkapi.com/v2/beers?per_page=80&abv_gt=6`);
      alert("you clicked abv");
    } else if (event.target.value === "classic") {
      getPunks(punkUrl.inUseURL = `https://api.punkapi.com/v2/beers?per_page=80&brewed_before=01-2010`);
      alert("you clicked classic");
    } else if (event.target.value === "acidity") {
      setPunks(punks.filter((acidBeer) => acidBeer.ph < 4));
      alert("you clicked acidity");
    }
  }
}


  return (
    <div className="container">

      <div className="container__lh-nav">
        <h2>NAV BAR</h2>
        <Button onClick={getPunks} label="Line Up The Bar!" />
        <h2>Items</h2>
        <Nav
        tickCheckBox={returnCheckBox}
        />

        <h2>Search Bar</h2>
        <SearchBar punksArry={punks}/>

        <h4>Beers returned = {punks.length}</h4>
      </div>

      {/* <div className="container__beer-tiles">
        <BeerTiles beersArry={punks}/>
      </div> */}

    </div>
  );
}

export default App;
