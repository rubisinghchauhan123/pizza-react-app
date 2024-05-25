import { useContext, useState, useEffect, useRef } from "react";
import { CartContext } from "../CartContext";
import Data from "../Product.json";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [cartList, setCartList] = useState([]);
  const totalCostRef = useRef(0);
  const navigate = useNavigate();

  const backButton = () => {
    navigate(-1);
  };

  useEffect(() => {
    let arr = [];
    let totalCost = 0;
    for (const item in cart.items) {
      const getItem = Data.pizza.find((pizza) => pizza.id === Number(item));
      if (getItem) {
        arr.push({ ...getItem, count: cart.items[item] });
        totalCost += getItem.price * cart.items[item];
      }
    }
    setCartList([...arr]);
    totalCostRef.current = totalCost;
  }, [cart]);

  const removeToCart = (product) => {
    // event.preventDefault();
    let _cart = { ...cart }; // { items: {}}
    if (!_cart.items) {
      _cart.items = {};
    }
    if (_cart.items[product.id] > 1) {
      _cart.items[product.id] -= 1;
    } else if (_cart.items[product.id] === 1) {
      delete _cart.items[product.id];
    }

    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    if (_cart.totalItems > 0) {
      _cart.totalItems -= 1;
    } else {
      _cart.totalItems = 0;
    }

    setCart(_cart);
  };

  const addToCart = (product) => {
    // event.preventDefault();
    let _cart = { ...cart }; // { items: {}}
    if (!_cart.items) {
      _cart.items = {};
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
  };

  const deleteItemFromCart = (product) => {
    let _cart = { ...cart };
    _cart.totalItems -= _cart.items[product.id];
    delete _cart.items[product.id];
    setCart(_cart);
  };

  const orderNow = () => {
    window.alert("Order Placed Successfully !");
    setCartList([]);
    setCart({});
  };

  return !cartList.length ? (
    <img className="mx-auto w-1/2 mt-12" src="Images/empty-cart.png" alt="" />
  ) : (
    <div className="container mx-auto  lg:w-1/2 w-full pb-24">
      <button className=" mb-12px font-bold mb-12 " onClick={backButton}>
        Back
      </button>
      <h1 className="my-12 font-bold">Cart Items</h1>
      <div className="cart-section">
        {cartList.length > 0 &&
          cartList.map((item) => {
            return (
              <ul
                key={item?.id}
                className="flex items-center justify-between mb-12"
              >
                <li className="flex items-center">
                  <img className="h-16" src={item?.image} alt="" />
                  <span className="font-bold ml-4 w-48">{item.name}</span>
                </li>
                <li>
                  <button
                    onClick={() => removeToCart(item)}
                    className=" bg-yellow-500 px-4 py-2 rounded-full leading-none"
                  >
                    -
                  </button>
                  <span className="px-4">{item.count}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className=" bg-yellow-500 px-4 py-2 rounded-full leading-none"
                  >
                    +
                  </button>
                </li>
                <li>
                  <span>${item.price * item.count}</span>
                </li>
                <li>
                  <button
                    onClick={() => deleteItemFromCart(item)}
                    className="bg-red-500 px-4 py-2 rounded-full leading-none text-white"
                  >
                    Delete
                  </button>
                </li>
              </ul>
            );
          })}
        <hr className="my-6" />
        <div className="text-right">
          <div>
            {" "}
            <b>Grand Total:</b> {totalCostRef.current}
          </div>
          <button
            onClick={orderNow}
            className=" bg-yellow-500 px-4 py-2 rounded-full leading-none"
          >
            {" "}
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
