import './ProductsInTheCart.css';
import {useEffect, useState} from "react";
import CartProduct from "./CartProduct/CartProduct";
import {Link} from "react-router-dom";

const ProductsInTheCart = () => {

    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('persist:root');
        let shopObject = JSON.parse(data);
        let productsString = shopObject.shoppingCart;
        let productsObject = JSON.parse(productsString);
        let products = productsObject.productsInCart;

        if (products) {
            setCartProducts(products);
        }
    }, []);

    return (
        cartProducts.length ?
        <div className="cartProducts">
            <h2 className="side-title">Products in the cart</h2>
            <div className="Products">
                {
                    cartProducts.slice(0, 4).map(cartProduct => <CartProduct cartProduct={cartProduct} key={cartProduct.id}/>)
                }
            </div>
            { cartProducts.length > 4 ?
            <div className="show-more">
                <Link to="/shoppingCart">
                    <span className="counter-badge">{cartProducts.length}</span>
                    More in the cart
                </Link>
            </div> : ''
            }
        </div> : ''
    )
}

export default ProductsInTheCart;