import "./SearchBar.scss"
import { useState } from "react";
import BeerTiles from "../BeerTiles/BeerTiles";
import SearchBanner from "../../components/SearchBanner/SearchBanner"
import Nav from "../Nav/Nav";



const SearchBar = ({punksArry}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanedInput = event.target.value.toLowerCase();
    setSearchTerm(cleanedInput);
  }

  const filteredPunks = punksArry.filter((lowercasePunks) => {
    const ammendedPunks = lowercasePunks.name.toLowerCase();

    return ammendedPunks.includes(searchTerm);
  });
  

  return (
    <div className="container">
      <div className="searchbanner">
        <SearchBanner label={"Search Beers"} searchTerm={searchTerm} handleInput={handleInput} />
      </div>
      <div className="beertiles">
        <BeerTiles beersArry={filteredPunks}/>
      </div>
    </div>
  )

};

export default SearchBar