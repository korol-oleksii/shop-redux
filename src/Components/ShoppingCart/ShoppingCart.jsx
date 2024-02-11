import {useDispatch, useSelector} from "react-redux";
import ProductInCart from "./ProductInCart/ProductInCart";
import './ShoppingCart.css';
import {useEffect} from "react";
import {setPreloader} from "../../data/reducers/shoppingCartReducer";
import Preloader from "../Preloader/Preloader";
import BasketEmpty from "./BasketEmpty/BasketEmpty";

const ShoppingCart = () => {

    let productsInCart = useSelector(state => state.shoppingCart.productsInCart);
    let isPreloader = useSelector(state => state.shoppingCart.isPreloader)

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPreloader(true))
    }, [productsInCart]);

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
                <div className="cart__total">
                    <h3>Total price: {productsInCart.reduce((acc, productInCart) => acc + productInCart.price, 0)}</h3>
                    <button>Submit</button>
                </div>
            </div>
        </div>
            : <Preloader/>
    )
}

export default ShoppingCart;