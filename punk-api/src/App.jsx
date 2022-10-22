import './App.scss';
import beersData from "./data/beersData.jsx"

import BeerTiles from "./containers/BeerTiles.jsx"

const App = () => {
  return (
    <div className="container">

      <div className="container__lh-nav">
        <h2>NAV BAR</h2>
        <h2>Items</h2>
      </div>

      <div className="container__beer-tiles">
        <BeerTiles beersArry={beersData}/>
      </div>

    </div>
  );
}

export default App;
