import React from "react";
import "./Filter-section.css"

const FilterSection = () => {
    return (
        <div className="filterSection">
            <h3 className="filterTitle">Filter</h3>
            <fieldset className="brand filterBox">
                <legend className="brand filterName">Brand</legend>
                <div className="filterBoxCheckbox">
                    <input type="checkbox" id="ysl"/>
                    <label htmlFor="ysl">Yves Saint Laurent</label>
                </div>
                <div className="filterBoxCheckbox">
                    <input type="checkbox" id="versace"/>
                    <label htmlFor="versace">Versace</label>
                </div>
                <div className="filterBoxCheckbox">
                    <input type="checkbox" id="armani"/>
                    <label htmlFor="armani">Giorgio Armani</label>
                </div>
                <div className="filterBoxCheckbox">
                    <input type="checkbox" id="dolceGabbana"/>
                    <label htmlFor="dolceGabbana">Dolce & Gabbana</label>
                </div>
                <div className="filterBoxCheckbox">
                    <input type="checkbox" id="chanel"/>
                    <label htmlFor="chanel">Chanel</label>
                </div>
                <div className="filterBoxCheckbox">
                    <input type="checkbox" id="chloe"/>
                    <label htmlFor="chloe">Chloe</label>
                </div>
                <div className="filterBoxCheckbox">
                    <input type="checkbox" id="dior"/>
                    <label htmlFor="dior">Dior</label>
                </div>
                <div className="filterBoxCheckbox">
                    <input type="checkbox" id="carolinaHerrera"/>
                    <label htmlFor="carolinaHerrera">Carolina Herrera</label>
                </div>
                <div className="filterBoxCheckbox">
                    <input type="checkbox" id="hermes"/>
                    <label htmlFor="hermes">Hermes</label>
                </div>
                <div className="filterBoxCheckbox">
                    <input type="checkbox" id="calvinKlein"/>
                    <label htmlFor="calvinKlein">Calvin Klein</label>
                </div>
                <div className="filterBoxCheckbox">
                    <input type="checkbox" id="pacoRabanne"/>
                    <label htmlFor="pacoRabanne">Paco Rabanne</label>
                </div>
            </fieldset>
            <fieldset className="countryTM  filterBox">
                <legend className="filterName">Country of TM</legend>
                <div className="filterBoxCheckbox">
                    <input type="checkbox" id="france"/>
                    <label htmlFor="france">France</label>
                </div>
                <div className="filterBoxCheckbox">
                    <input type="checkbox" id="italy"/>
                    <label htmlFor="italy">Italy</label>
                </div>
                <div className="filterBoxCheckbox">
                    <input type="checkbox" id="usa"/>
                    <label htmlFor="usa">USA</label>
                </div>
                <div className="filterBoxCheckbox">
                    <input type="checkbox" id="spain"/>
                    <label htmlFor="spain">Spain</label>
                </div>
            </fieldset>
            <fieldset className="madeIn  filterBox">
                <legend className="filterName">Made in</legend>
                <div className="filterBoxCheckbox">
                    <input type="checkbox" id="france"/>
                    <label htmlFor="france">France</label>
                </div>
                <div className="filterBoxCheckbox">
                    <input type="checkbox" id="italy"/>
                    <label htmlFor="italy">Italy</label>
                </div>
                <div className="filterBoxCheckbox">
                    <input type="checkbox" id="spain"/>
                    <label htmlFor="spain">Spain</label>
                </div>
            </fieldset>
            <fieldset className="gender  filterBox">
                <legend className="filterName">Gender</legend>
                <div className="filterBoxCheckbox">
                    <input type="checkbox" id="forWomen"/>
                    <label htmlFor="forWomen">For women</label>
                </div>
                <div className="filterBoxCheckbox">
                    <input type="checkbox" id="forMen"/>
                    <label htmlFor="forMen">For men</label>
                </div>
            </fieldset>
        </div>
    )
}

export default FilterSection;