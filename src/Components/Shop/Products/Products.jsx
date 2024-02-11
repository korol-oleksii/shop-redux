import ProductCard from "./ProductCard/ProductCard";
import './Products.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import axios from "axios";
import {setProducts} from "../../../data/reducers/shopReducer";
import Preloader from "../../Preloader/Preloader";

const Products = () => {

    let products = useSelector(state => state.shop.products);
    let dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => dispatch(setProducts(response.data)))
    }, []);

    return (
        <div className="Products">
            {
                products.length ? products.map(product => <ProductCard product={product} key={product.id}/>) :
                    <Preloader/>
            }
        </div>
    )
}

export default Products;