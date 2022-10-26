import './App.scss';
// import beersData from "./data/beersData.jsx"
import { useState, useEffect } from "react";
import Nav from './containers/Nav/Nav';
import SearchBar from './containers/SearchBar/SearchBar';

const App = () => {
  const [punks, setPunks] = useState([]);
  const [filterBy, setFilterBy] = useState("")



  const getPunks = async (beerFilter) => {
    let APIurl = `https://api.punkapi.com/v2/beers?per_page=80`;
    
    if (beerFilter === "abv > 6%") {
      APIurl = "https://api.punkapi.com/v2/beers?per_page=80&abv_gt=6"
    } else if (beerFilter === "classic (brewed before 2010)") {
      APIurl = "https://api.punkapi.com/v2/beers?per_page=80&brewed_before=01-2010"
    }

    const res = await fetch(APIurl);
    const data = await res.json();
    setPunks(data);
    console.log(punks)
};

  useEffect(() => {
    getPunks(filterBy);
  },[filterBy]);

  const handleClick = (event) => {
    setFilterBy(event.target.value);
  };


  return (
    <div className='container'>
        
      <div className="navbar">
        <h1>Whats your poison....</h1>
        <Nav
        onChange={handleClick}
        selected={filterBy}
        options={["ABV > 6%", "Classic (Brewed before 2010)", "Acidic (pH > 4)"]}
        label="Filter the beer some more..."
        
      />
        <h4>Beers returned = {punks.length}</h4>
      </div>

        <SearchBar punksArry={punks}/>

    </div>
  );
}

export default App;
