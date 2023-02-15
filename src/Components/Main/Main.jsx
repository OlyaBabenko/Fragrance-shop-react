import React, {useState} from "react";
import SectionProducts from "./Section-products/Section-products";
import FilterSection from "./Filter-section/Filter-section";
import "./Main.css";
import data from "../../assets/data/data.json";

let Main = () => {
    const [newData, setNewData]=useState(data)
    const handleClick = (value) => {
        console.log(value)
        let arrayProduct = [];
        let lowerCaseValue = value.toLowerCase;
        console.log(lowerCaseValue);
        data.map( pr => {
            if (pr.gender === lowerCaseValue) {
                arrayProduct.push(pr);
            }
        })
        setNewData(arrayProduct);
    }
    return (
        <main>
            <div className="pseudoHeader"></div>
            <div className="mainHeader">
                <input type="button" className="mainHeaderItem" onClick={() => {handleClick()}} value="ALL"/>
                <input type="button" className="mainHeaderItem" onClick={()=> {handleClick()}} value="FOR HIM"/>
                <input type="button" className="mainHeaderItem" onClick={() => {handleClick()}} value="FOR HER"/>
            </div>
            <div className="mainSections">
                <FilterSection/>
                <SectionProducts data={newData}/>
            </div>

        </main>
    )
}

export default Main;
