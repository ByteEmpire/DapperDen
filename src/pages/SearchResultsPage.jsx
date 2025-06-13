// src/pages/SearchResultsPage.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';  // Using context to get the search term
import ProductCard from '../components/ProductCard';

// Assuming you have your products in a local array or fetched from an API.
import products from '../data/products';  // Adjust this import according to where your product data is stored.

const SearchResultsPage = () => {
  const { searchTerm } = useSearch(); // Get search term from context
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Get the query from the URL or use the context searchTerm if available
    const searchQuery = new URLSearchParams(location.search).get('query') || searchTerm;

    // Filter products by name or description
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Update the filtered products
    setFilteredProducts(filtered);
    setLoading(false);
  }, [location.search, searchTerm]);  // Re-run when search term or URL query changes

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Search Results</h2>
      {loading ? (
        <div className="flex justify-center items-center">
          <span>Loading...</span>
        </div>
      ) : (
        <>
          {filteredProducts.length === 0 ? (
            <div className="flex justify-center items-center">
              <span>No products found for "{new URLSearchParams(location.search).get('query') || searchTerm}"</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResultsPage;
