import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Navigation from './components/Navigation';
import ProductsPage from './pages/ProductsPage';
import { CartContext } from './CartContext';
import { useEffect, useState } from 'react';
import { getCart, storeCart } from './cartHelpers';





const App = () => {
    const [cart, setCart] = useState({});
// sample commit
//Fetching cart from local storage//
    useEffect(() => {
        getCart().then(cart => {
            setCart(JSON.parse(cart))
        })
    }, [])

    useEffect(() => {
        storeCart(JSON.stringify(cart))
    }, [cart]);


    return <>
        <Router>
            <CartContext.Provider value={{ cart, setCart }}>
                < Navigation />
                <Routes>
                    <Route path="/" Component={Home} exact></Route>
                    <Route path="about" Component={About}></Route>
                    <Route path="products" exact Component={ProductsPage}></Route>
                    <Route path="products/:id" exact Component={SingleProduct}></Route>
                    <Route path="cart" Component={Cart}></Route>
                </Routes>
            </CartContext.Provider>
        </Router>
    </>
}

export default App;
