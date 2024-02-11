import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import axios from "axios";
import {
    setAmountCount,
    setAmountCountDecrement,
    setAmountCountIncrement,
    setPreloader,
    setProductInfo
} from "../../../../../data/reducers/shopReducer";
import './ProductInfo.css';
import {useParams} from "react-router-dom";
import Preloader from "../../../../Preloader/Preloader";
import {addProductsToCart} from "../../../../../data/reducers/shoppingCartReducer";

const ProductInfo = () => {

    let products = useSelector(state => state.shop.products);
    let isPreloader = useSelector(state => state.shop.isPreloader);
    let amountCount = useSelector(state => state.shop.amountCount);

    let dispatch = useDispatch();

    let {productId} = useParams();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(response => {
                dispatch(setPreloader(true))
                dispatch(setProductInfo(response.data))
            });
    }, []);

    // amount increment/decrement count
    const amountCountIncrementHandler = () => {
        dispatch(setAmountCountIncrement(amountCount));
    }
    const amountCountDecrementHandler = () => {
        dispatch(setAmountCountDecrement(amountCount));
    }
    const ChangeAmountCountHandler = (e) => {
        dispatch(setAmountCount(e.target.value));
    }
    const AddProductToCartHandler = () => {
        dispatch(addProductsToCart(products));
        if (addProductsToCart(products)) {
            let buttonAddCart = document.querySelector('.product-buy__action button');
            buttonAddCart.innerText = 'Added to cart';
        }
    }

    return (
        isPreloader ?
        <div className="ProductInfo product mesh--row">
            <div className="product-image">
                <img src={products.image} alt={products.title}/>
            </div>
            <div className="product-description">
                <div className="product-title">
                    {products.title}
                </div>
                <div className="product-category">
                    Cat: {products.category}
                </div>
                <div className="product-buy">
                    <div className="product-buy__amount">
                        <button className="button button--decrement" onClick={amountCountDecrementHandler}>
                            <span className="button__text">
                                &ndash;
                            </span>
                        </button>
                        <input className="input input-amount" type="number" onChange={(e) => ChangeAmountCountHandler(e)} value={amountCount}/>
                        <button className="button button--increment" onClick={amountCountIncrementHandler}>
                            <span className="button__text">
                                +
                            </span>
                        </button>
                    </div>
                    <div className="product-buy__price">
                        ${products.price}
                    </div>
                    <div className="product-buy__action">
                        <button onClick={AddProductToCartHandler}>Buy</button>
                    </div>
                </div>
                <div className="product-desc">
                    {products.description}
                </div>
            </div>
        </div>
            : <Preloader/>
    )
}

export default ProductInfo;