import './Main.css';
import ProductsInTheCart from "../ProductsInTheCart/ProductsInTheCart";
import {Route, Routes} from "react-router-dom";
import ProductInfo from "../Shop/Products/ProductInfo/ProductInfo";
import PopularProducts from "../PopularProducts/PopularProducts";

const Main = () => {
    return (
        <div className="Main">
            <Routes>
                <Route path='/*' element={<><ProductsInTheCart/><PopularProducts/></>}/>
                {/*<Route path='/*' element={<PopularProducts/>}/>*/}
                <Route path='/product/:productId' element={<ProductInfo/>}/>
            </Routes>
        </div>
    )
}

export default Main;