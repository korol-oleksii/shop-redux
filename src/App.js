import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";

function App() {
    return (
        <div className="App">
            <header className="header">
                <nav className="nav">
                    <ul>
                        <li><NavLink to='/'>Shop</NavLink></li>
                        <li><NavLink to='/shoppingCart'>Shopping Cart</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                <Routes>
                    <Route path='/*' element={<Shop/>}/>
                    <Route path='/shoppingCart' element={<ShoppingCart/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
