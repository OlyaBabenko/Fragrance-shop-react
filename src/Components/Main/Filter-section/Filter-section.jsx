import React from "react";
import "./Filter-section.css"
import data from "../../../assets/data/data.json"
import {useDispatch} from "react-redux";
import {
    removeBrandAction,
    removeCountryAction,
    setBrandAction,
    setCountryAction
} from "../../../store/filteredProductsReducer";

const CheckboxItem = (props) => {
    const dispatch = useDispatch()
    const handleChange = (event, key, name) => {
        if (event.target.checked) {
            switch (key) {
                case "brand":
                    return dispatch(setBrandAction(name))
                case "country":
                    return dispatch(setCountryAction(name))
                default:
                        return
            }
        } else if (!event.target.checked) {
            switch (key) {
                case "brand":
                    return dispatch(removeBrandAction(name))
                case "country":
                    return dispatch(removeCountryAction(name))
                default:
                    return
            }
        }
    }

    return (
        <label className="filterBoxCheckbox">
            <input type="checkbox"
                   key={props.keyFilter}
                   onChange={(event) => {
                       handleChange(event, props.keyFilter, props.name)
                // return event.target.checked ? props.checked : props.unchecked;
            }}/>
            {props.name}
        </label>
    )
}

const getFilterItem = (data, fieldset) => {
    let names = []
    if (fieldset === "brand") {
        data.forEach(product => {
            if (!names.includes(product.brand)) {
                names.push(product.brand)
            }
        })
    } else if (fieldset === "country") {
        data.forEach(product => {
            if (!names.includes(product.description['Country of TM'])) {
                names.push(product.description['Country of TM'])
            }
        })
    }
    return names
}
const FilterSection = () => {
    // const dispatch = useDispatch()

    const brands = getFilterItem(data, "brand").map(brand =>
        <div><CheckboxItem
            // checked={dispatch(setBrandAction(brand))}
            // unchecked={dispatch(removeBrandAction(brand))}
            name={brand}
            keyFilter="brand"/>
        </div>)

    const countries = getFilterItem(data, "country").map(country =>
        <div><CheckboxItem
            // checked={dispatch(setCountryAction(country))}
            // unchecked={dispatch(removeCountryAction(country))}
            name={country}
            keyFilter="country"/>
        </div>)
    return (
        <div className="filterSection">
            <h3 className="filterTitle">Filter</h3>
            <fieldset className="brand filterBox">
                <legend className="brand filterName">Brand</legend>
                {brands}
            </fieldset>
            <fieldset className="countryTM  filterBox">
                <legend className="filterName">Country of TM</legend>
                {countries}
            </fieldset>

        </div>
    )
}

export default FilterSection;