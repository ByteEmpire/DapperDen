import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import ProductListing from './components/ProductListing';
import Newsletter from './components/Newsletter';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CustomerPolicies from './pages/CustomerPolicies';
import Login from './pages/Login';
import Signup from './pages/Signup'; 
import Wishlist from './pages/Wishlist';
import CategoryProducts from './pages/CategoryProducts';
import CartPage from './pages/CartPage';      // ← Import CartPage
import SearchResultsPage from './pages/SearchResultsPage';  // ← Import SearchResultsPage
import './App.css';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext'; 
import { SearchProvider } from './context/SearchContext'; // Import SearchProvider

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <SearchProvider> {/* Wrap your app inside SearchProvider */}
          <Router>
            <div className="App">
              <Header />
              <Routes>
                {/* Home Route */}
                <Route
                  path="/"
                  element={
                    <>
                      <HeroBanner />
                      <main>
                        <Categories />
                        <FeaturedProducts />
                        <ProductListing />
                        <Newsletter />
                        <Testimonials />
                        <Contact />
                      </main>
                    </>
                  }
                />

                {/* Dynamic Category Route */}
                <Route path="/category/:categoryName" element={<CategoryProducts />} />

                {/* Search Results Route */}
                <Route path="/search" element={<SearchResultsPage />} />  {/* ← Add SearchResultsPage Route */}

                {/* Policies Section Route */}
                <Route path="/policies/:section" element={<CustomerPolicies />} />

                {/* Auth Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Wishlist */}
                <Route path="/wishlist" element={<Wishlist />} />

                {/* CART */}
                <Route path="/cart" element={<CartPage />} />    {/* ← Cart route */}
              </Routes>
              <Footer />
              <BackToTop />
            </div>
          </Router>
        </SearchProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
