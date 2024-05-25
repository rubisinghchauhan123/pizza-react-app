export  const getCart = () =>{
    return new Promise((resolve, reject) => {
        const cart = localStorage.getItem('cart');
        return cart;
    })
   
}

export  const storeCart = (cart) =>{
    localStorage.setItem('cart', JSON.stringify(cart));
}