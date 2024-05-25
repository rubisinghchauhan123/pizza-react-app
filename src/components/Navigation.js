import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext';

const Navigation = () => {
    const cartstyle = {
        background: 'Blue',
        display: 'flex',
        padding: '6px 12px',
        borderRadius: '50px'

    }

    const {cart} = useContext (CartContext);


    return (
        <>
            <nav className="container mx-auto flex items center justify-between py-5">
                <Link to="/"> <img style={{ height: 40 }} src="/Images/logo.png" alt="logo" /></Link>
                <ul className="flex items center">
                    <li><Link to="/">Home</Link></li>
                    <li className="ml-5"><Link to="/Products"> Products</Link></li>
                    <li className="ml-5">
                        <Link to="/Cart">
                            <div style={cartstyle}>
                                <span>{cart.totalItems}</span>
                                < img className="ml-2" src="/Images/cart.png" alt="cart-icon" />
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation