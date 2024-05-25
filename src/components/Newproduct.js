import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext";

const Newproduct = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const { Newproduct } = props;


  const addToCart = (product) => {
    let _cart = { ...cart }; 
    if (!_cart.items) {
      _cart.items = {}
    }
    if (_cart.items[product.id]) {
      _cart.items[product.id] += 1;
    } else {
      _cart.items[product.id] = 1;
    }
    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;
    setCart(_cart);
    setIsAdding(true)
    setTimeout(() => {
      setIsAdding(false)
    }, 10000);
  }




  return (
    <div>
      <div>
        <Link to={`/products/${Newproduct.id}`}>
          <img src={Newproduct.image} alt="pizza" />
          <div className="text-center">
            <h2 className="text-lg font-bold py-2">{Newproduct.name}</h2>
            <span className="bg-red-200 py-2 rounded-full text-sm px-4"> {Newproduct.description} </span>
          </div>
        </Link>
        <div className="flex justify-between items-center mt-4">
          <span>{Newproduct.price}</span>
          <button disabled={isAdding} onClick={() => { addToCart(Newproduct) }} className={`${isAdding ? 'bg-green-500' : 'bg-yellow-500'} 
            py-1 px-4 rounded-full font-bold`} >ADD{isAdding ? 'ED' : ''}</button>
        </div>
      </div>
    </div>

  )
}

export default Newproduct;