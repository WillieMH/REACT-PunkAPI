import "./Nav.scss";
// import NavFilter from "../../components/NavFilter/NavFilter.jsx";

const Nav = ({checkByVol, checkByYrBrewed, checkByAcidity}) => {

return (
    <div className="">
        <input 
            className="" 
            value="abv > 6%" 
            type="checkbox" 
            onChange={checkByVol}
        />
        <label className="">High ABV (&gt; 6.0%)</label>
                
        <input 
            className="" 
            value="brewed pre2010" 
            type="checkbox" 
            onChange={checkByYrBrewed}
                />
        <label className="">Classic Range (before 2010)</label>
                
        <input 
            className="" 
            value="acidity"
            name="acidity"
            type="checkbox"
            onChange={checkByAcidity} 
            />
            <label className="">"Acidic (pH &lt; 4)"</label>
    </div>
    )
}

export default Nav;
