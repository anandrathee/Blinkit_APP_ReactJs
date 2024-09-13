import React, { useState, useEffect } from 'react';
import { TiPlus, TiMinus } from 'react-icons/ti';

const Cart = ({ handleCart, cartItems }) => {
  const [cartProduct, setCartProduct] = useState(cartItems);

  useEffect(() => {
    // Disable body scroll when cart is open
    document.body.style.overflow = 'hidden';

    // Enable body scroll when cart is closed
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClose = () => {
    handleCart(false);
  };

  const handleQuantityChange = (index, type) => {
    const updatedCartItems = [...cartProduct];
    if (type === "increment") {
      updatedCartItems[index].quantity += 1;
    } else {
      if (updatedCartItems[index].quantity > 1) {
        updatedCartItems[index].quantity -= 1;
      }
    }
    setCartProduct(updatedCartItems); // State ko update karo
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div className="w-full h-screen max-w-md mx-auto bg-white shadow-md rounded-lg overflow-y-auto">
      <div className="p-4 border-b border-gray-300">
        <h2 className="text-xl font-semibold">My Cart</h2>
        <button onClick={handleClose} className="text-3xl absolute top-2 right-4">&times;</button>
      </div>

      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div className="p-4 flex items-center border-b border-gray-300" key={index}>
            <div className="w-20 h-20 border flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover"
              />
            </div>

            <div className="flex-1 ml-4">
              <p className="text-sm text-gray-600">{item.name}</p>
              <p className="text-xs text-gray-500">{item.weight}</p>
              <p className="text-xs font-bold mt-2">₹{item.price}</p>
            </div>

            <div className="flex items-center">
              <button
                className="text-white bg-green-700 rounded-full p-1"
                onClick={() => handleQuantityChange(index, "decrement")}
              >
                <TiMinus size={16} />
              </button>
              <span className="mx-2 text-lg">{item.quantity}</span>
              <button
                className="text-white bg-green-700 rounded-full p-1"
                onClick={() => handleQuantityChange(index, "increment")}
              >
                <TiPlus size={16} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center w-full mt-10 text-gray-500">Your cart is empty</p>
      )}

      {cartItems.length > 0 && (
        <>
          <div className="p-4">
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <p className="text-sm text-gray-600">Items total</p>
              <p className="text-sm">₹{calculateTotal()}</p>
            </div>
            <div className="flex justify-between border-b border-gray-300 py-2">
              <p className="text-sm text-gray-600">Delivery charge</p>
              <p className="text-sm">₹25</p>
            </div>
            <div className="flex justify-between border-b border-gray-300 py-2">
              <p className="text-sm text-gray-600">Handling charge</p>
              <p className="text-sm">₹2</p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-sm font-bold text-gray-600">Grand total</p>
              <p className="text-sm font-semibold">₹{calculateTotal() + 27}</p>
            </div>
          </div>

          <div className="p-4 bg-green-100 flex items-center justify-between">
            <p className="text-sm font-bold">₹{calculateTotal() + 27}<br /> <span className='font-normal text-xs'>TOTAL</span></p>
            <button className="text-white bg-green-700 rounded-full px-4 py-2">
              Login to Proceed
            </button>
          </div>
        </>
      )}

      <div className="p-4 border-t border-gray-300">
        <p className="text-xs text-gray-500">
          Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.
        </p>
      </div>
    </div>
  );
};

export default Cart;
