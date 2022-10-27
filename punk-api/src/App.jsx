import './App.scss';
// import beersData from "./data/beersData.jsx"
import { useState, useEffect } from "react";
import Nav from './containers/Nav/Nav';
import SearchBar from './containers/SearchBar/SearchBar';

const App = () => {
  const [punks, setPunks] = useState([]);
  const [punksByABV, setPunksByABV] = useState(false); //refac
  const [punksByClassicRange, setPunksByClassicRange] = useState(false); //refac
  const [punksAcidity, setPunksAcidity] = useState(false); //refac
  const [punksArry, setPunksArry] = useState([]); //refac


  const getPunks = async () => {
    const res = await fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=80`);
    const data = await res.json();
    setPunks(data);
    setPunksArry(data);
    console.log(punks);
};

  useEffect(() => {
    getPunks();
  }, []);

  //refac
  const handleABV = () => {
    setPunksByABV(!punksByABV)
  } 

  const handleClassic = () => {
    setPunksByClassicRange(!punksByClassicRange)
  } 

  const handlePh = () => {
    setPunksAcidity(!punksAcidity)
  } 

  useEffect(() => {
    let checkedBeer = punksArry;
    if (punksByABV) {
      checkedBeer = checkedBeer.filter(beer => beer.abv > 6)
    }
    if (punksByClassicRange) {
      checkedBeer = checkedBeer.filter(beer => beer.first_brewed.slice(3) < 2010)
    } 
    if (punksAcidity) {
      checkedBeer = checkedBeer.filter(beer => beer.ph < 4)
    }
    setPunks(checkedBeer)
  }, [punksByABV, punksByClassicRange, punksAcidity, punksArry])



  return (
    <div className='container'>
        
      <div className="navbar">
        <h1>Whats your poison....</h1>
        <Nav 
        handleABV={handleABV}
        handleClassic={handleClassic}
        handlePh={handlePh}
      />
        <h4>Beers returned = {punks.length}</h4>
      </div>

        <SearchBar punksArry={punks}/>

    </div>
  );
}

export default App;
