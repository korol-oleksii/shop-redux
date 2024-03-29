import cartIcon from './assets/img/cart.svg';
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import {useSelector} from "react-redux";
import Main from "./Components/Main/Main";

function App() {

    let productsInCart = useSelector(state => state.shoppingCart.productsInCart);

    return (
        <div className="App">
            <header className="header">
                <nav className="nav">
                    <ul>
                        <li><NavLink to='/'>Main</NavLink></li>
                        <li data-flex="1"><NavLink to='/shop'>Shop</NavLink></li>
                        <li>
                            <NavLink to='/shoppingCart'>
                                Shopping Cart
                                <img src={cartIcon} alt=""/>
                                {productsInCart.length ?
                                    <span className="counter-badge">{productsInCart.length}</span> : ''}
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                <Routes>
                    <Route path='/*' element={<Main/>}/>
                    <Route path='/shop/*' element={<Shop/>}/>
                    <Route path='/shoppingCart' element={<ShoppingCart/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
