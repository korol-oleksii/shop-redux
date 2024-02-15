import {NavLink, Route, Routes} from "react-router-dom";
import Products from "./Products/Products";
import './Shop.css';
import ProductInfo from "./Products/ProductInfo/ProductInfo";
import {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../../data/reducers/shopReducer";

const Shop = () => {

    let categories = useSelector(state => state.shop.category);
    let dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then(response => dispatch(setCategory(response.data)))
    }, []);

    return (
        <div className="Shop">
            <nav className="nav-side">
                <ul>
                    <li><NavLink to="/">All products</NavLink></li>
                    {
                        categories.map((category, index) => <li key={index}><NavLink to={category}>{category}</NavLink></li>)
                    }
                </ul>
            </nav>
            <div className="products">
                <Routes>
                    <Route path='/*' element={<Products/>}/>
                    <Route path='/:category' element={<Products/>}/>
                    <Route path='/product/:productId' element={<ProductInfo/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Shop;