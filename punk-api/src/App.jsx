import './App.scss';
// import beersData from "./data/beersData.jsx"
import { useState, useEffect } from "react";
import Nav from './containers/Nav/Nav';
import SearchBar from './containers/SearchBar/SearchBar';

const App = () => {
  const [punks, setPunks] = useState([]);
  const [punksByABV, setPunksByABV] = useState(false); 
  const [punksByClassicRange, setPunksByClassicRange] = useState(false); 
  const [punksAcidity, setPunksAcidity] = useState(false); 
  const [punksArry, setPunksArry] = useState([]); 


  const getPunks = async () => {
    const res = await fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=80`);
    const data = await res.json();
    setPunks(data);
    setPunksArry(data);
    console.log(punks);
};

// have api load without button, [] to make it only run once.
  useEffect(() => {
    getPunks();
  }, []);

// filter functions
  const filteredByVol = () => {
    setPunksByABV(!punksByABV)
  } 

  const filteredbyYearBrewed = () => {
    setPunksByClassicRange(!punksByClassicRange)
  } 

  const filteredByAcidity = () => {
    setPunksAcidity(!punksAcidity)
  } 

// use effect to filter beers arry according to filter state
  useEffect(() => {
    let filteredPunks = punksArry;
      if (punksByABV) {
      filteredPunks = filteredPunks.filter(beer => beer.abv > 6)
    }

      if (punksByClassicRange) {
      filteredPunks = filteredPunks.filter(beer => beer.first_brewed.slice(3) < 2010)
    } 

      if (punksAcidity) {
      filteredPunks = filteredPunks.filter(beer => beer.ph < 4)
    }

      setPunks(filteredPunks)
  }, [punksByABV, punksByClassicRange, punksAcidity, punksArry])



  return (
    
    <div className='container'>

    <div className="welcomebar">
      <h1>WELCOME TO THE PUNK CATALOGUE</h1>
      <h2>Whats your poison....</h2>
    </div> 
      <div className="navbar">
        <Nav 
        checkByVol={filteredByVol}
        checkByYrBrewed={filteredbyYearBrewed}
        checkByAcidity={filteredByAcidity}
      />
      </div>
      <div className="beercount">
        <h4>Beers returned = {punks.length}</h4>
      </div>

        <SearchBar punksArry={punks}/>

    </div>
  );
}

export default App;
