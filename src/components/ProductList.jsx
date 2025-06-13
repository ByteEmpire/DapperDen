import React from 'react';

const ProductList = ({ products, filters }) => {
  const applyFilters = () => {
    let filtered = [...products];

    // Category Filter
    if (filters.category.length > 0) {
      filtered = filtered.filter(product =>
        filters.category.includes(product.category)
      );
    }

    // Size Filter
    if (filters.size.length > 0) {
      filtered = filtered.filter(product =>
        filters.size.includes(product.size)
      );
    }

    // Rating Filter
    filtered = filtered.filter(product => product.rating >= filters.rating);

    // Price Filter
    filtered = filtered.filter(product => product.price <= filters.maxPrice);

    // Sort
    if (filters.sort === 'asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  };

  const filteredProducts = applyFilters();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {filteredProducts.map(product => (
        <div
          key={product.id}
          className="border p-4 rounded shadow hover:shadow-lg transition-all"
        >
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p>₹{product.price}</p>
          <p className="text-sm text-gray-600">{product.category} | Size: {product.size}</p>
          <p className="text-yellow-500">⭐ {product.rating}</p>
        </div>
      ))}

      {filteredProducts.length === 0 && (
        <div className="col-span-full text-center text-gray-500">No products found</div>
      )}
    </div>
  );
};

export default ProductList;
