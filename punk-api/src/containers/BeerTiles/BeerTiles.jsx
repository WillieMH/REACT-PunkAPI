import "./BeerTiles.scss"

const BeerTiles = (props) => {
  const {beersArry} = props;

  const displayBeers = beersArry.map((beer) => (

    <div className="container__beer-tiles--beercard">
      <h2>{beer.name}</h2>
      <h4>"{beer.tagline}"</h4>
      <h4>"ABV{beer.abv}% Acidity:{beer.ph}</h4>
      <img src={beer.image_url} alt="Beer" />
      <h4>First Brewed {beer.first_brewed}</h4>
    </div>  
      

  ));

  return <>{displayBeers}</>;
};
export default BeerTiles;