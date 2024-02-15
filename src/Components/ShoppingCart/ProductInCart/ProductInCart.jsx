import './ProductInCart.css';
import {useDispatch} from "react-redux";
import {
    removeProductFromCart,
    setCountDecrement,
    setCount
} from "../../../data/reducers/shoppingCartReducer";
import {useNavigate} from "react-router-dom";

const ProductInCart = ({productInCart}) => {

    let dispatch = useDispatch();
    let navigate = useNavigate();

    const ShowMoreHandler = () => {
        navigate(`/product/${productInCart.id}`)
    }

    const removeProductHandler = () => {
        dispatch(removeProductFromCart(productInCart))
    }

    const onChangeCountHandler = () => {
        dispatch(setCount(productInCart))
    }
    const countIncrementHandler = () => {
        dispatch(setCount(productInCart))
    }
    const countDecrementHandler = () => {
        dispatch(setCountDecrement(productInCart))
    }

    return (
        <div className="ShoppingCart mesh--row cart">
            <div className="cart__image">
                <img src={productInCart.image} alt={productInCart.title}/>
            </div>
            <div className="cart__desc mesh--cell">
                <div className="cart__title">
                    {productInCart.title}
                </div>
                <div className="cart__category">
                    {productInCart.category}
                </div>
                <div className="cart__desc">
                    <div className="text text-ellipse-3">{productInCart.description}</div>
                </div>
                <div className="cart__price">
                    ${(productInCart.price * productInCart.counter).toFixed(2)}
                </div>
                <div className="cart__action mesh--row">
                    <div className="product-buy__amount">
                        <button className="button button--decrement" onClick={countDecrementHandler}>
                            <span className="button__text">
                                &ndash;
                            </span>
                        </button>
                        <input className="input input-amount" type="number" onChange={onChangeCountHandler} value={productInCart.counter}/>
                        <button className="button button--increment" onClick={countIncrementHandler}>
                            <span className="button__text">
                                +
                            </span>
                        </button>
                    </div>
                    <div className="cart__action--show-more">
                        <button onClick={ShowMoreHandler}>
                            Show more
                        </button>
                    </div>
                </div>
            </div>
            <div className="cart__remove">
                <button onClick={removeProductHandler}>&times;</button>
            </div>
        </div>
    )
}

export default ProductInCart;