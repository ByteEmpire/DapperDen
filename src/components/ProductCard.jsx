// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
      <p className="text-gray-500 mt-2">{product.description}</p>
      <div className="mt-4">
        <span className="font-bold text-lg">{product.price}</span>
      </div>
      <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
