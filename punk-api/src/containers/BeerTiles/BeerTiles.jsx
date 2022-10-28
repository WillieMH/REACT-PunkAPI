import "./BeerTiles.scss"

const BeerTiles = (props) => {
  const {beersArry} = props;

  const displayBeers = beersArry.map((beer) => (


      <div className="container__beer-tiles">
        <div className="container__beer-tiles--title">
          <h2>{beer.name}</h2>
          <h3>"{beer.tagline}"</h3>
        </div>

        <div className="container__beer-tiles--info">
          <div className="container__beer-tiles--infotext">
            
            <h4>ABV{beer.abv}% Acidity:{beer.ph}</h4>
            <h4>Potion Invented: {beer.first_brewed}</h4>
            <p>{beer.description}</p>
          </div>
          <div className="container__beer-tiles--infoimg">
            <img src={beer.image_url} alt="Beer" />
          </div>

        </div>
        
      </div>

      

  ));

  return <>{displayBeers}</>;
};
export default BeerTiles;