import "./Nav.scss";

const Nav = ({ onChange, selected, options, label }) => {
  return (
    <div className="radio-buttons">
      <p>{label}</p>
      {options.map((option, index) => {
        const optionLower = option.toLowerCase();

        return (
          <div key={"radio-button" + option + index}>
            <input
              type="radio"
              name="gender"
              value={optionLower}
              checked={optionLower === selected.toLowerCase()}
              onChange={onChange}
            />
            <label className="radio-buttons__label" htmlFor={optionLower}>
              {option}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Nav;
