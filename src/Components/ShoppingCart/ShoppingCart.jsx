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
                    <h3 className="side-title">Placing an order</h3>
                    <div className="row">
                        <input className="input" type="text" placeholder=""/>
                        <span className="text--placeholder">Name</span>
                    </div>
                    <div className="row">
                        <input className="input" type="email" placeholder=""/>
                        <span className="text--placeholder">Email</span>
                    </div>
                    <div className="row">
                        <input className="input" type="tel" placeholder=""/>
                        <span className="text--placeholder">Phone</span>
                    </div>
                    <div className="row">
                        <input className="input" type="text" placeholder=""/>
                        <span className="text--placeholder">Address</span>
                    </div>
                    <div className="row">
                        <textarea className="input input--textarea" placeholder=""/>
                        <span className="text--placeholder">Comment</span>
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
                                Total quantity products:
                                <strong>
                                    {productsInCart.reduce((acc, productInCart) => acc + productInCart.counter, 0)}
                                    <span className="text--small"> units</span>
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