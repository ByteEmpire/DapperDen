import React, { useState } from 'react';
import {
  FaUser,
  FaHeart,
  FaShoppingBag,
  FaBoxOpen,
  FaTshirt,
  FaMale,
  FaFemale,
  FaChild,
  FaSignOutAlt
} from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { user, logout } = useAuth();            // your auth
  const { getTotalQuantity } = useCart();        // new
  const totalQuantity = getTotalQuantity();      // new

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    console.log('Search Query:', searchQuery);

    // Navigate to the search results page with the query
    navigate(`/search?query=${searchQuery}`);
  };

  const handleProfileClick = () => {
    if (user) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleWishlistClick = () => {
    navigate('/wishlist');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    navigate('/cart');
  };

  const handleOrdersClick = () => {
    navigate('/orders');
  };

  return (
    <header className="bg-gray-900 text-white p-4 shadow-md w-full">
      <div className="flex justify-between items-center w-full">
        {/* Left Side: Brand + Navigation */}
        <div className="flex space-x-6">
          <button
            onClick={handleLogoClick}
            className="text-xl font-bold flex items-center space-x-2 hover:text-gray-300 focus:outline-none"
          >
            <FaTshirt size={24} />
            <span>DapperDen</span>
          </button>
          <nav className="flex space-x-6 text-sm">
            <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
              <FaMale size={20} />
              <span>Men</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
              <FaFemale size={20} />
              <span>Women</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
              <FaChild size={20} />
              <span>Kids</span>
            </a>
          </nav>
        </div>

        {/* Middle Search Bar */}
        <div className="flex justify-center flex-grow mx-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch(query);
            }}
            className="flex w-full max-w-xl"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for products..."
              className="p-3 w-full border-2 border-gray-300 rounded-l-lg focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white p-3 rounded-r-lg hover:bg-orange-400 focus:outline-none"
            >
              <BsSearch size={20} />
            </button>
          </form>
        </div>

        {/* Right Side: Profile, Wishlist, Cart, Orders */}
        <div className="flex space-x-6 text-sm items-center">
          {user ? (
            <>
              <a
                href="#"
                className="flex items-center space-x-1 hover:text-gray-300"
                onClick={(e) => { e.preventDefault(); handleProfileClick(); }}
              >
                <FaUser size={20} />
                <span>{user.name || user.email}</span>
              </a>

              <a
                href="#"
                className="flex items-center space-x-1 hover:text-gray-300"
                onClick={(e) => { e.preventDefault(); handleLogout(); }}
              >
                <FaSignOutAlt size={20} />
                <span>Logout</span>
              </a>
            </>
          ) : (
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-gray-300"
              onClick={(e) => { e.preventDefault(); handleProfileClick(); }}
            >
              <FaUser size={20} />
              <span>Profile</span>
            </a>
          )}

          <a
            href="#"
            className="flex items-center space-x-1 hover:text-gray-300"
            onClick={(e) => { e.preventDefault(); handleWishlistClick(); }}
          >
            <FaHeart size={20} />
            <span>Wishlist</span>
          </a>

          <a
            href="#"
            className="relative flex items-center space-x-1 hover:text-gray-300"
            onClick={handleCartClick}
          >
            <FaShoppingBag size={20} />
            <span>Cart</span>
            {totalQuantity > 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full text-xs px-2 py-0.5">
                {totalQuantity}
              </span>
            )}
          </a>

          <a
            href="#"
            className="flex items-center space-x-1 hover:text-gray-300"
            onClick={(e) => { e.preventDefault(); handleOrdersClick(); }}
          >
            <FaBoxOpen size={20} />
            <span>Orders</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
