import React from "react";
import SectionProducts from "./Section-products/Section-products";
import FilterSection from "./Filter-section/Filter-section.jsx";
import "./Main.css";
import {useDispatch} from "react-redux";
import {filterAllAction, filterForHerAction, filterForHimAction} from "../../store/productsReducer";

let Main = () => {
    const dispatch = useDispatch()

    const filterForHim = () => {
        dispatch(filterForHimAction())
    }
    const filterForHer = () => {
        dispatch(filterForHerAction())
    }
    const showAll = () => {
        dispatch(filterAllAction())
    }
    return (
        <main>
            <div className="pseudoHeader"></div>
            <div className="mainHeader">
                <input type="button" className="mainHeaderItem" onClick={() => {showAll()}} value="ALL"/>
                <input type="button" className="mainHeaderItem" onClick={()=> {filterForHim()}} value="FOR HIM"/>
                <input type="button" className="mainHeaderItem" onClick={() => {filterForHer()}} value="FOR HER"/>
            </div>
            <div className="mainSections">
                <FilterSection/>
                <SectionProducts/>
            </div>
        </main>
    )
}

export default Main;
