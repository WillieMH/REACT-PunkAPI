import "./BeerTiles.scss"

const BeerTiles = (props) => {
  const {beersArry} = props;

  const displayBeers = beersArry.map((beer) => (

    <div className="container__beer-tiles--beercard">
      <h2>{beer.name}</h2>
      <h4>"{beer.tagline}"</h4>
      {/* <img src={beer.image_url} alt="Beer" /> */}
    </div>  
      

  ));

  return <>{displayBeers}</>;
};
export default BeerTiles;