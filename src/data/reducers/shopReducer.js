import {createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'shop',
    initialState: {
        products: [],
        isPreloader: false,
        amountCount: 1
    },
    reducers: {
        setProducts(state, action) {
            return {...state, products: [...action.payload]}
        },
        setProductInfo(state, action) {
            return {...state, products: {...action.payload}}
        },
        setPreloader(state, action) {
            return {...state, isPreloader: action.payload}
        },
        setAmountCount(state, action) {
            state.amountCount += action.payload
        },
        setAmountCountIncrement(state) {
            state.amountCount++
        },
        setAmountCountDecrement(state) {
            state.amountCount === 1 ? state.amountCount = 1 : state.amountCount--
        }
    }
})

export const {setProducts, setProductInfo, setPreloader, setAmountCount, setAmountCountIncrement, setAmountCountDecrement} = productSlice.actions

export default productSlice.reducer