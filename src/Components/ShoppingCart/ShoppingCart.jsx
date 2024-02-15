import buyImg from '../../assets/img/buy.svg'
import {useDispatch, useSelector} from "react-redux";
import ProductInCart from "./ProductInCart/ProductInCart";
import './ShoppingCart.css';
import {useEffect} from "react";
import {setPreloader} from "../../data/reducers/shoppingCartReducer";
import Preloader from "../Preloader/Preloader";
import BasketEmpty from "./BasketEmpty/BasketEmpty";

const ShoppingCart = () => {

    let productsInCart = useSelector(state => state.shoppingCart.productsInCart);
    let isPreloader = useSelector(state => state.shoppingCart.isPreloader);

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPreloader(true));
    }, []);

    return (
        isPreloader ?
        <div className="ShoppingCart cart">
            <div className="cart__container mesh--row">
                <div className="cart__fields">
                    <div className="row">
                        <h3>Name:</h3>
                        <input className="input" type="text"/>
                    </div>
                    <div className="row">
                        <h3>Email:</h3>
                        <input className="input" type="email"/>
                    </div>
                    <div className="row">
                        <h3>Phone:</h3>
                        <input className="input" type="tel"/>
                    </div>
                    <div className="row">
                        <h3>Address:</h3>
                        <input className="input" type="text"/>
                    </div>
                </div>
                <div className="cart__products">
                    {
                        productsInCart.length ? productsInCart.map(productInCart => <ProductInCart productInCart={productInCart} key={productInCart.id}/>) : <BasketEmpty/>
                    }
                </div>
                <div className="cart__total mesh--row">
                    <div className="cart__total--price">
                        <div className="mesh--row">
                            <h3>Total price:</h3>
                            <div className="text-price">
                                {productsInCart.length > 0 ? <>$</> : ''}{productsInCart.reduce((acc, productInCart) => (acc + productInCart.price) * productInCart.counter, 0).toFixed(2)}
                            </div>
                        </div>
                        {
                            productsInCart.length ?
                            <div className="cart-total-qnt mesh--row">
                                Total count products:
                                <strong>
                                    {productsInCart.reduce((acc, productInCart) => acc + productInCart.counter, 0)}
                                </strong>
                            </div> : ''
                        }
                    </div>
                    <button>
                        <img src={buyImg} alt="order"/> Order
                    </button>
                </div>
            </div>
        </div>
            : <Preloader/>
    )
}

export default ShoppingCart;