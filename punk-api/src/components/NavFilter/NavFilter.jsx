import "./NavFilter.scss";

const NavFilter = ({handleABV, handleClassic, handlePh}) => {


    return (
<>
                
                <input 
                    className="checkbox__input" 
                    value="abv" 
                    type="checkbox" 
                    onChange={handleABV}/>
                    <label className="checkbox__label">High ABV (&gt; 6.0%)</label>


                
                <input 
                    className="checkbox__input" 
                    value="classic" 
                    type="checkbox" 
                    onChange={handleClassic}
                />
                <label className="checkbox__label">Classic Range (before 2010)</label>


                
                <input 
                    className="checkbox__input" 
                    value="ph" 
                    type="checkbox"
                    onChange={handlePh} 
                />
                <label className="checkbox__label">"Acidic (pH &lt; 4)"</label>
</>

    )
}

export default NavFilter;