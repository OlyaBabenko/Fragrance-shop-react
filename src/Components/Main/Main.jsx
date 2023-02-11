import React from "react";
import SectionProducts from "./Section-products/Section-products";
import FilterSection from "./Filter-section/Filter-section";
import "./Main.css";
import MainHeader from "./Main-header/Main-header";

let Main = () => {
    return (
        <main>
            <MainHeader/>
            <div className="mainSections">
                <FilterSection/>
                <SectionProducts/>
            </div>

        </main>
    )
}

export default Main;
