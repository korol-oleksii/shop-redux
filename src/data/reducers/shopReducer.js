import {createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'shop',
    initialState: {
        products: [],
        categories: [],
        reviews: [
            {id: 1, name: 'Alex', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: '16.02.2024, 17:34:11'},
            {id: 2, name: 'Nik', comment: 'Lorem ipsum dolor sit amet...', date: '14.02.2024, 20:46:09'},
            {id: 3, name: 'Robert', comment: 'Lorem ipsum dolor sit amet, consectetur!.', date: '10.02.2024, 10:00:12'},
        ],
        isPreloader: false,
    },
    reducers: {
        setProducts(state, action) {
            return {...state, products: [...action.payload]}
        },
        setCategory(state, action) {
            return {...state, categories: [...action.payload]}
        },
        setProductInfo(state, action) {
            return {...state, products: {...action.payload}}
        },
        setPreloader(state, action) {
            return {...state, isPreloader: action.payload}
        },
        // sorting
        setSortByMinPrice(state) {
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
                products: [...state.products].sort((a) => a.id > id ? 1 : -1)
            }
        },
        setSortByRating(state) {
            return {
                ...state,
                products: [...state.products].sort((a, b) => b.rating.rate - a.rating.rate)
            }
        },
        // reviews
        setReviews(state, action) {
            return {
                ...state,
                reviews: [{
                    id: state.reviews.length + 1,
                    name: 'Guest',
                    comment: action.payload,
                    date: new Date().toLocaleString()
                }, ...state.reviews]
            }
        }
    }
})

export const {setProducts, setCategory, setProductInfo, setPreloader, setCount, setSortByMinPrice, setSortByMaxPrice,setSortByTitle, setSortById, setSortByRating, setReviews} = productSlice.actions

export default productSlice.reducer