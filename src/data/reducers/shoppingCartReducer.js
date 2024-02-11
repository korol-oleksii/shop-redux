import {createSlice} from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        productsInCart: [],
        isPreloader: false,
    },
    reducers: {
        addProductsToCart(state, action) {
            return {...state, productsInCart: [...state.productsInCart, action.payload]}
        },
        removeProductFromCart(state, action) {
            let {id} = action.payload;
            return {...state, productsInCart: [...state.productsInCart.filter(productInCart => productInCart.id !== id)]}
        },
        setPreloader(state, action) {
            return {...state, isPreloader: action.payload}
        }
    }
})

export const {addProductsToCart, setPreloader, removeProductFromCart} = shoppingCartSlice.actions

export default shoppingCartSlice.reducer