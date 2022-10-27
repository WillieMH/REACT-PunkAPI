import "./Nav.scss";

const Nav = ({ onChange, selected, options, label }) => {
  return (
    <div className="check-boxes">
      <p>{label}</p>
      {options.map((option, index) => {
        const optionLower = option.toLowerCase();

        return (
          <div key={"check-boxes" + option + index}>
            <input
              type="checkbox"
              name="gender"
              value={optionLower}
              checked={optionLower === selected.toLowerCase()}
              onChange={onChange}
            />
            <label className="check-boxes__label" htmlFor={optionLower}>
              {option}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Nav;
