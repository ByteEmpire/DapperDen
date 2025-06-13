import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const AddToCartButton = ({ product, buttonClass }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    if (!product || !(product.id || product._id)) {
      console.warn('❌ Product is missing an id or _id:', product);
      return;
    }

    const formattedProduct = {
      ...product,
      id: product.id || product._id, // fallback for MongoDB _id
    };

    addToCart(formattedProduct);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button
      onClick={handleClick}
      className={`${buttonClass || ''} ${added ? 'bg-green-500' : ''}`}
    >
      {added ? '✓ Added' : 'Add to Cart'}
    </button>
  );
};

export default AddToCartButton;
