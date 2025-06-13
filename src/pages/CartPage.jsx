import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const CartPage = () => {
  const { cartItems, removeFromCart, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const userId = 'dummy_user_123'; // Replace with real user ID if available

  useEffect(() => {
    const saveCartToBackend = async () => {
      try {
        await axios.post('http://localhost:5000/api/cart/save', {
          userId,
          cartItems,
        });
        console.log('Cart saved to MongoDB Atlas');
      } catch (error) {
        console.error('Error saving cart:', error);
      }
    };

    if (cartItems.length > 0) {
      saveCartToBackend();
    }
  }, [cartItems]);

  const handleContinueShopping = () => {
    navigate('/');
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId); // This will also trigger save through useEffect
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div>
          <p className="text-lg text-center">Your cart is empty</p>
          <button
            onClick={handleContinueShopping}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center p-4 border-b">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                <div className="flex-grow ml-4">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p>{item.description}</p>
                  <p className="text-lg font-semibold">{item.price}</p>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Total Price: ₹{getTotalPrice()}</h2>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
