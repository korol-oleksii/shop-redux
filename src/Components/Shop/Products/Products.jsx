import ProductCard from "./ProductCard/ProductCard";
import './Products.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import axios from "axios";
import {
    setPreloader,
    setProducts, setSortById,
    setSortByMaxPrice,
    setSortByMinPrice, setSortByRating,
    setSortByTitle
} from "../../../data/reducers/shopReducer";
import Preloader from "../../Preloader/Preloader";
import {useParams} from "react-router-dom";

const Products = () => {

    let products = useSelector(state => state.shop.products);
    let isPreloader = useSelector(state => state.shop.isPreloader)
    let dispatch = useDispatch();

    let {category} = useParams();
    category = category ? `/category/${category}` : '';

    useEffect(() => {
        dispatch(setPreloader(true));
        axios.get(`https://fakestoreapi.com/products/${category}`)
            .then(response => {
                dispatch(setPreloader(false))
                dispatch(setProducts(response.data))
            })
    }, [category]);

    const sortByMinPriceHandler = () => {
        dispatch(setSortByMinPrice(products));
    }
    const sortByMaxPriceHandler = () => {
        dispatch(setSortByMaxPrice(products));
    }
    const sortByTitleHandler = () => {
        dispatch(setSortByTitle(products));
    }
    const sortByIdHandler = () => {
        dispatch(setSortById(products));
    }
    const sortByRatingHandler = () => {
        dispatch(setSortByRating(products));
    }

    return (
        <>
            <div className="filter">
                <div className="filter__body">
                    <div className="filter__item mesh--row" data-flex="1">
                        <button className="btn-rating" onClick={sortByRatingHandler}>
                            Sort by Rating
                        </button>
                    </div>
                    <div className="filter__item mesh--row">
                        <button onClick={sortByIdHandler}>Sort by Date</button>
                    </div>
                    <div className="filter__item mesh--row">
                        <button onClick={sortByTitleHandler}>Sort by Name</button>
                    </div>
                    <div className="filter__item mesh--row">
                        Sort by Price:
                        <button onClick={sortByMinPriceHandler}>Min</button>
                        <button onClick={sortByMaxPriceHandler}>Max</button>
                    </div>
                </div>
            </div>
            <div className="Products">
                {
                    isPreloader ? <Preloader/> : products.map((product, index) =>
                        <ProductCard product={product} key={index}/>)
                }
            </div>
        </>
    )
}

export default Products;