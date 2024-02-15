import {createSlice} from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        productsInCart: [],
        isPreloader: false,
    },
    reducers: {
        addProductsToCart(state, action) {
            let {id} = action.payload;
            let productInCart = {...action.payload, counter: 1};

            if (!state.productsInCart.some(product => product.id === id)) {
                return {...state, productsInCart: [...state.productsInCart, productInCart]}
            } else {
                state.productsInCart.forEach((product) => {
                    if (product.id === id) {
                        product.counter += 1;
                    }
                })
            }
        },
        removeProductFromCart(state, action) {
            let {id} = action.payload;
            return {...state, productsInCart: [...state.productsInCart.filter(productInCart => productInCart.id !== id)]}
        },
        setPreloader(state, action) {
            return {...state, isPreloader: action.payload}
        },
        setCount(state, action) {
            let {id} = action.payload;
            state.productsInCart.forEach((el) => {
                if (el.id === id) {
                    el.counter += 1;
                }
            })
        },
        setCountDecrement(state, action) {
            let {id} = action.payload;
            state.productsInCart.forEach((el) => {
                if (el.id === id) {
                    if (el.counter === 1) {
                        el.counter = 1;
                    } else {
                        el.counter -= 1;
                    }
                }
            })
        }
    }
})

export const {addProductsToCart, setPreloader, removeProductFromCart, setCount, setCountDecrement} = shoppingCartSlice.actions

export default shoppingCartSlice.reducer