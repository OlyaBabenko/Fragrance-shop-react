import {combineReducers, createStore} from "redux";
import {productsReducer} from "./productsReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {filterReducer} from "./filteredProductsReducer";
import {cartReducer} from "./cartReducer";

const rootReducer = combineReducers({

    filter: filterReducer,
    products: productsReducer,
    cart: cartReducer,
})
let store = createStore(rootReducer, composeWithDevTools())
export default store;