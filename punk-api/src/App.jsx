import './App.scss';
// import beersData from "./data/beersData.jsx"
import { useState } from "react";

import BeerTiles from "./containers/BeerTiles.jsx"
import Button from "./components/Button/Button.jsx"

const App = () => {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const url = `https://api.punkapi.com/v2/beers`;
    const res = await fetch(url);
    const data = await res.json();
    setUser(data);
    console.log(user)
};

  return (
    <div className="container">

      <div className="container__lh-nav">
        <h2>NAV BAR</h2>
        <Button onClick={getUser} label="Line Up The Bar!" />
        <h2>Items</h2>
      </div>

      <div className="container__beer-tiles">
        <BeerTiles beersArry={user}/>
      </div>

    </div>
  );
}

export default App;
