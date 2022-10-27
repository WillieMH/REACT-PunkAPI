import './App.scss';
// import beersData from "./data/beersData.jsx"
import { useState, useEffect } from "react";
import Nav from './containers/Nav/Nav';
import SearchBar from './containers/SearchBar/SearchBar';

const App = () => {
  const [punks, setPunks] = useState([]);



  const getPunks = async () => {
    const res = await fetch(`https://api.punkapi.com/v2/beers?per_page=80`);
    const data = await res.json();
    setPunks(data);
    console.log(punks)
};

  useEffect(() => {
    getPunks();
  },[]);



  return (
    <div className='container'>
        
      <div className="navbar">
        <h1>Whats your poison....</h1>

        <h4>Beers returned = {punks.length}</h4>
      </div>

        <SearchBar punksArry={punks}/>

    </div>
  );
}

export default App;
