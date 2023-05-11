const SET_BRAND_FILTER = 'SET_BRAND_FILTER'
const SET_COUNTRY_FILTER = 'SET_COUNTRY_FILTER'
const REMOVE_BRAND_FILTER = 'REMOVE_BRAND_FILTER'
const REMOVE_COUNTRY_FILTER = 'REMOVE_COUNTRY_FILTER'

const initialState = {
    brands: [],
    countries: []
};

export function filterReducer(state = initialState, action) {
    switch (action.type) {
        case SET_BRAND_FILTER:
            return { ...state, brands: [...state.brands, action.payload] };
        case REMOVE_BRAND_FILTER:
            return { ...state, brands: state.brands.filter(brand => brand!==action.payload)};
        case SET_COUNTRY_FILTER:
            return { ...state, countries: [...state.countries, action.payload] };
        case REMOVE_COUNTRY_FILTER:
            return { ...state, countries: state.countries.filter(country => country!==action.payload)}
        default:
            return state;
    }
}

export const setBrandAction = (payload) => ({type:SET_BRAND_FILTER, payload})
export const removeBrandAction = (payload) => ({type:REMOVE_BRAND_FILTER, payload})
export const setCountryAction = (payload) => ({type:SET_COUNTRY_FILTER, payload})
export const removeCountryAction = (payload) => ({type:REMOVE_COUNTRY_FILTER, payload})
