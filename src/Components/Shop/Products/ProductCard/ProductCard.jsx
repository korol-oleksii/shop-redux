import './ProductCard.css';
import buySvg from '../../../../assets/img/buy.svg';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addProductsToCart} from "../../../../data/reducers/shoppingCartReducer";
import {useState} from "react";

const ProductCard = ({product}) => {

    let dispatch = useDispatch();
    let navigate = useNavigate();

    const ShowMoreHandler = () => {
        navigate(`/product/${product.id}`)
    }

    let [qnt, setQnt] = useState(0);

    const AddProductToCartHandler = () => {
        dispatch(addProductsToCart(product));
        setQnt(qnt + 1);
    }

    return (
        <div className="ProductCard card">
            <div className="card__image">
                <img src={product.image} alt={product.title}/>
            </div>
            <div className="card__category">
                {product.category}
            </div>
            <div className="card__title">
                {product.title}
            </div>
            <div className="card__desc">
                <div className="text text-ellipse-3">{product.description}</div>
            </div>
            <div className="card__price">
                ${product.price}
            </div>
            <div className="card__action mesh--row">
                <div className="card__action--show-more">
                    <button onClick={ShowMoreHandler}>Show more</button>
                </div>
                <div className="card__action--add-cart">
                    <button onClick={AddProductToCartHandler}>
                        <img src={buySvg} alt="Add to Cart"/>
                        {
                            qnt < 1 ? '' : <span className="counter-badge">{qnt}</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;