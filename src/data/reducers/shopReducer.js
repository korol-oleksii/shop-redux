import {createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'shop',
    initialState: {
        products: [],
        category: [],
        isPreloader: false,
        // quantity: 0,
    },
    reducers: {
        setProducts(state, action) {
            // let {id} = action.payload;
            // let product = {...action.payload, quantity: 0};

            return {...state, products: [...action.payload]}
        },
        setCategory(state, action) {
            return {...state, category: [...action.payload]}
        },
        setProductInfo(state, action) {
            return {...state, products: {...action.payload}}
        },
        setPreloader(state, action) {
            return {...state, isPreloader: action.payload}
        },

        setSortByMinPrice(state, action) {
            return {
                ...state,
                products: [...state.products].sort((a, b) => a.price - b.price)

            }
        },
        setSortByMaxPrice(state) {
            return {
                ...state,
                products: [...state.products].sort((a, b) => a.price < b.price ? 1 : -1)

            }
        },
        setSortByTitle(state) {
            return {
                ...state,
                products: [...state.products].sort((a, b) => a.title.localeCompare(b.title))
            }
        },
        setSortById(state, action) {
            let {id} = action.payload;
            return {
                ...state,
                products: [...state.products].sort((a, b) => a.id > id ? 1 : -1)
            }
        },

        setCount(state, action) {
            let {id} = action.payload;
            state.products.forEach((product) => {
                if (product.id === id) {
                    product.quantity += 1;
                }
            })
        },

    }
})

export const {setProducts, setCategory, setProductInfo, setPreloader, setCount, setSortByMinPrice, setSortByMaxPrice,setSortByTitle, setSortById} = productSlice.actions

export default productSlice.reducer