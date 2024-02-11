import './ProductInCart.css';
import {useDispatch} from "react-redux";
import {removeProductFromCart} from "../../../data/reducers/shoppingCartReducer";
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
                    ${productInCart.price}
                </div>
                <div className="cart__action mesh--row">
                    <div className="product-buy__amount">
                        <button className="button button--decrement">
                            <span className="button__text">
                                &ndash;
                            </span>
                        </button>
                        <input className="input input-amount" type="number" value="1"/>
                        <button className="button button--increment">
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