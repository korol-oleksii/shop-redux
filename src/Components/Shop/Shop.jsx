import {NavLink, Route, Routes} from "react-router-dom";
import Products from "./Products/Products";
import './Shop.css';
import ProductInfo from "./Products/ProductCard/ProductInfo/ProductInfo";

const Shop = () => {
    return (
        <div className="Shop">
            <nav className="nav-side">
                <ul>
                    <li><NavLink to="#">Link</NavLink></li>
                    <li><NavLink to="#">Link</NavLink></li>
                    <li><NavLink to="#">Link</NavLink></li>
                    <li><NavLink to="#">Link</NavLink></li>
                </ul>
            </nav>
            <div className="products">
                <Routes>
                    <Route path='/' element={<Products/>}/>
                    <Route path='/product/:productId' element={<ProductInfo/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Shop;