import "./Nav.scss";

const Nav = ({ tickCheckBox }) => {
  return (
    <div className="filter-checkboxes">
      <label htmlFor="" className="filter-checkboxes__classic">
        Classic (Pre 2010)
      </label>
      <input
        type="checkbox"
        value="classic"
        className="filter-checkboxes__classic--input"
        onChange={tickCheckBox}
      />
      <br />
      <label htmlFor="" className="filter-checkboxes__abv">
        ABV &gt; 6%
      </label>
      <input
        type="checkbox"
        value="abv"
        className="filter-checkboxes__classic--input"
        onChange={tickCheckBox}
      />
      <br />
      <label htmlFor="" className="filter-checkboxes__classic">
        Acidity &lt; pH4
      </label>
      <input
        type="checkbox"
        value="acidity"
        className="filter-checkboxes__classic--input"
        onChange={tickCheckBox}
      />
    </div>
  );
};

export default Nav;
