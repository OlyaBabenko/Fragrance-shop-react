import data from "../assets/data/data.json";


const defaultState = {
    products: data,
}

const FILTER_GENDER_FOR_HIM = "FILTER_GENDER_FOR_HIM"
const FILTER_GENDER_FOR_HER = "FILTER_GENDER_FOR_HER"
const FILTER_GENDER_ALL = "FILTER_GENDER_ALL"

export const productsReducer = (state = defaultState, action) => {
    let newState
    switch (action.type) {
        case FILTER_GENDER_FOR_HIM:
            newState = defaultState
            return {...newState, products: newState.products.filter(product => product.gender === "for him")}
        case FILTER_GENDER_FOR_HER:
            newState = defaultState
            return {...newState, products: newState.products.filter(product => product.gender === "for her")}
        case FILTER_GENDER_ALL:
            return defaultState
        default:
            return defaultState
    }
}

export const filterForHimAction = () => ({type:FILTER_GENDER_FOR_HIM})

export const filterForHerAction = () => ({type:FILTER_GENDER_FOR_HER})

export const filterAllAction = () => ({type:FILTER_GENDER_ALL})