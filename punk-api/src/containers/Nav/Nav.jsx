import "./Nav.scss";
import NavFilter from "../../components/NavFilter/NavFilter.jsx";

const Nav = (props) => {
  const {handleABV, handleClassic, handlePh} = props;
  return (
      <div className="nav">
          <h1>Refine your beers....</h1>
          <NavFilter handleABV={handleABV} handleClassic={handleClassic} handlePh={handlePh}/>
      </div>
      )
}

export default Nav;
