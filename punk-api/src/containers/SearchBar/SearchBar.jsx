import "./SearchBar.scss"
import { useState } from "react";
import BeerTiles from "../BeerTiles/BeerTiles";
import SearchBanner from "../../components/SearchBanner/SearchBanner"


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
    <>
    <SearchBanner label={"Beers"} searchTerm={searchTerm} handleInput={handleInput} />
    <BeerTiles beersArry={filteredPunks}/>
    </>
  )

};

export default SearchBar