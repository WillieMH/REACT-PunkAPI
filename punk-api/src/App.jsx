import './App.scss';
// import beersData from "./data/beersData.jsx"
import { useState, useEffect } from "react";
import Nav from './containers/Nav/Nav';
import SearchBar from './containers/SearchBar/SearchBar';

const App = () => {
  const [punks, setPunks] = useState([]);
  const [abvBeers, setAbvBeers] = useState(false); //refac
  const [classicBeers, setClassicBeers] = useState(false); //refac
  const [phBeers, setPhBeers] = useState(false); //refac
  const [punksArry, setPunksArry] = useState([]); //refac


  const getPunks = async () => {
    const res = await fetch(`https://api.punkapi.com/v2/beers?per_page=80`);
    const data = await res.json();
    setPunks(data);
    setPunksArry(data);
    console.log(punks)
};

  useEffect(() => {
    getPunks();
  }, []);

  //refac
  const handleABV = () => {
    setAbvBeers(!abvBeers)
  } 

  const handleClassic = () => {
    setClassicBeers(!classicBeers)
  } 

  const handlePh = () => {
    setPhBeers(!phBeers)
  } 

  useEffect(() => {
    let checkedBeer = punksArry;
    if (abvBeers) {
      checkedBeer = checkedBeer.filter(beer => beer.abv > 6)
    }
    if (classicBeers) {
      checkedBeer = checkedBeer.filter(beer => beer.first_brewed.slice(3) < 2010)
    } 
    if (phBeers) {
      checkedBeer = checkedBeer.filter(beer => beer.ph < 4)
    }
    setPunks(checkedBeer)
  }, [abvBeers, classicBeers, phBeers, punksArry])



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
