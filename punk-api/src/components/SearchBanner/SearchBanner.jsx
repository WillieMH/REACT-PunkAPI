import "./SearchBanner.scss";

const SearchBanner = (props) => {
  const { label, searchTerm, handleInput } = props;

  return (
      <input
        type="text"
        name={label}
        value={searchTerm}
        onInput={handleInput}
        placeholder="Search our beers..."
      />
  );
};

export default SearchBanner;