const defaultState = {
    cart: [],
}

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_TO_CART = "REMOVE_TO_CART";
const ADD_COUNT = "ADD_COUNT"
// const REMOVE_COUNT = "REMOVE_COUNT"

export const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {...state, cart: [...state.cart, action.payload]}
        case REMOVE_TO_CART:
            return {...state, cart: state.cart.filter(item => item.id !== action.payload)}
        case ADD_COUNT:
            console.log(action.payload)
            return {
                ...state,
                cart: state.cart.map((item) => (item.id === action.payload.id && item.volume === action.payload.volume
                        ? {...item, count: (item.count + action.payload.count)}
                        : item
                    //     {
                    //     ...item,
                    //     count: ((item.id === action.payload.id && item.volume === action.payload.volume)
                    //         ? (item.count + action.payload.count)
                    //         : (item.count))
                    // }
                ))
            }
        default:
            return state
    }
}

export const addToCart = (payload) => ({type: ADD_TO_CART, payload})
export const removeToCart = (payload) => ({type: REMOVE_TO_CART, payload})
export const addCount = (payload) => ({type: ADD_COUNT, payload})