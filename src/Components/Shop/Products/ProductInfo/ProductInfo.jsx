import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";
import {
    setPreloader,
    setProductInfo, setReviews
} from "../../../../data/reducers/shopReducer";
import './ProductInfo.css';
import {useParams} from "react-router-dom";
import Preloader from "../../../Preloader/Preloader";
import {addProductsToCart} from "../../../../data/reducers/shoppingCartReducer";
import Review from "../Review/Review";

const ProductInfo = () => {

    let products = useSelector(state => state.shop.products);
    let reviews = useSelector(state => state.shop.reviews);
    let isPreloader = useSelector(state => state.shop.isPreloader);

    let dispatch = useDispatch();

    let {productId} = useParams();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(response => {
                dispatch(setPreloader(true));
                dispatch(setProductInfo(response.data));
            });
    }, []);

    const AddProductToCartHandler = () => {
        dispatch(addProductsToCart(products));
        if (addProductsToCart(products)) {
            let buttonAddCart = document.querySelector('.product-buy__action button');
            buttonAddCart.innerText = 'Added to cart';
            //buttonAddCart.setAttribute('onclick', 'location.href="/shop-redux/shoppingCart/"');
        }
    }

    // let [userReview, setUserReview] = useState('');
    let [review, setReview] = useState('');

    // const onChangeUserReviewHandler = (e) => {
    //     setUserReview(e.target.value);
    // }
    const onChangeReviewHandler = (e) => {
        setReview(e.target.value);
    }
    const AddReviewHandler = () => {
        let isInvalid = document.querySelector('.input--textarea');
        if (review) {
            dispatch(setReviews(review));
            // setUserReview('');
            setReview('');
            isInvalid.classList.remove('invalid');
        } else {
            isInvalid.classList.add('invalid');
        }
    }

    return (
        isPreloader ?
        <div className="ProductInfo product mesh--row">
            <div className="product-image">
                <img src={products.image} alt={products.title}/>
            </div>
            <div className="product-box">
                <div className="product-box__desc">
                    <div className="product-title">
                        {products.title}
                    </div>
                    <div className="product-category">
                        Cat: {products.category}
                    </div>
                    <div className="product-buy">
                        <div className="product-buy__price">
                            ${(products.price).toFixed(2)}
                        </div>
                        <div className="product-buy__action">
                            <button onClick={AddProductToCartHandler}>Buy</button>
                        </div>
                    </div>
                    <div className="product-desc">
                        {products.description}
                    </div>
                    <div className="product-rating">
                        <span className="rate">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.94 47.94">
                                <path
                                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"/>
                            </svg>
                            {(products.rating.rate).toFixed(1)}
                            <span className="text--normal">({products.rating.count} votes)</span>
                        </span>
                    </div>
                </div>
                <div className="product-box__review">
                    <div className="product-review">
                        <h3>Leave a review</h3>
                        <div className="product-review__container mesh--cell">
                            <div className="product-review__form mesh--cell">
                                {/*<div className="product-review__row rel--area">
                            <input type="text" className="input" onChange={(e) => onChangeUserReviewHandler(e)} value={userReview} placeholder=""/>
                            <span className="text--placeholder">Name</span>
                        </div>*/}
                                <div className="product-review__row rel--area">
                            <textarea className="input input--textarea" onChange={(e) => onChangeReviewHandler(e)}
                                      value={review} placeholder=""></textarea>
                                    <div className="text--placeholder">Review</div>
                                </div>
                                <div className="product-review__row">
                                    <button className="button button--primary" onClick={AddReviewHandler}>Send review
                                    </button>
                                </div>
                            </div>
                            <div className="product-review__comment">
                                <div className="product-review__list">
                                    {
                                        reviews.length ? reviews.map(review => <Review review={review}
                                                                                       key={review.id}/>) :
                                            <h4>No reviews...</h4>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            : <Preloader/>
    )
}

export default ProductInfo;