// src/context/CartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const userId = "guestUser"; // 🛑 TEMPORARY for now, later you can replace it with actual logged-in user's ID

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    if (userId && cartItems.length > 0) {
      saveCartToDatabase(userId, cartItems);
    }
  }, [cartItems]);

  const saveCartToDatabase = async (userId, cartItems) => {
    try {
      const response = await axios.post('http://localhost:5000/api/cart/save', { userId, cartItems });
      if (response.status === 200) {
        console.log('🛒 Cart saved to MongoDB');
      }
    } catch (error) {
      console.error('❌ Error saving cart to database:', error);
    }
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Ensure required fields are present and handle missing data
      const formattedProduct = {
        id: product.id || product._id,
        name: product.name,
        price: product.price,
        size: product.size || "N/A", // Default to "N/A" if size is missing
        image: product.image,
        description: product.description || "No description available", // Fallback for missing description
        quantity: 1, // Default quantity is 1 if not provided
      };
  
      // Check if the product already exists in the cart
      const existingProduct = prevItems.find((item) => item.id === formattedProduct.id);
  
      if (existingProduct) {
        // If product already exists, update its quantity
        return prevItems.map((item) =>
          item.id === formattedProduct.id
            ? { ...item, quantity: item.quantity + 1 } // Increase quantity
            : item
        );
      } else {
        // Add new product to the cart
        return [...prevItems, formattedProduct];
      }
    });
  };
  
  

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedCartItems = prevItems.filter((item) => item.id !== productId);
      saveCartToDatabase(userId, updatedCartItems); // Immediately save to DB after removal
      return updatedCartItems;
    });
  };

  const getTotalPrice = () => {
    const total = cartItems.reduce((sum, item) => {
      const num = parseFloat(String(item.price).replace(/[^\d.]/g, '')) || 0;
      return sum + num * (item.quantity || 1);
    }, 0);
    return total.toFixed(2);
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getTotalPrice, getTotalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
