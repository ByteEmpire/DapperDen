import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';

const CartBadge = () => {
  const { getTotalQuantity } = useCart();
  const total = getTotalQuantity();
  const navigate = useNavigate();

  return (
    <div className="relative cursor-pointer" onClick={() => navigate('/cart')}>
      <div className="p-2 bg-gray-200 rounded-full">
        <FaShoppingBag size={20} />
      </div>
      {total > 0 && (
        <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-600 text-white rounded-full text-xs px-2 py-0.5">
          {total}
        </span>
      )}
    </div>
  );
};

export default CartBadge;
