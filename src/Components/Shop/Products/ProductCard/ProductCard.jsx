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
            <div className="card__price mesh--row">
                <span className="text-price">${product.price}</span>
                <span className="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.94 47.94">
                        <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"/>
                    </svg>
                    {(product.rating.rate).toFixed(1)}
                </span>
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