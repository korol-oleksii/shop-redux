import {configureStore} from "@reduxjs/toolkit";
import shopReducer from "../reducers/shopReducer";
import shoppingCartReducer from "../reducers/shoppingCartReducer";

let store = configureStore({
    reducer: {
        shop: shopReducer,
        shoppingCart: shoppingCartReducer,
    }
})

export default store;