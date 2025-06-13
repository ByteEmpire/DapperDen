import React from 'react';

const categories = ['Casual Wear', 'Kids Wear', 'Jewellery', 'Ethnic Wear', 'Watches'];
const sizes = ['S', 'M', 'L', 'XL'];

const FilterSidebar = ({ filters, setFilters }) => {
  const handleCheckbox = (type, value) => {
    const updated = filters[type].includes(value)
      ? filters[type].filter(item => item !== value)
      : [...filters[type], value];
    setFilters(prev => ({ ...prev, [type]: updated }));
  };

  return (
    <div className="w-64 p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      {/* Category */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Category</h3>
        {categories.map(cat => (
          <label key={cat} className="block">
            <input
              type="checkbox"
              checked={filters.category.includes(cat)}
              onChange={() => handleCheckbox('category', cat)}
              className="mr-2"
            />
            {cat}
          </label>
        ))}
      </div>

      {/* Size */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Size</h3>
        {sizes.map(size => (
          <label key={size} className="block">
            <input
              type="checkbox"
              checked={filters.size.includes(size)}
              onChange={() => handleCheckbox('size', size)}
              className="mr-2"
            />
            {size}
          </label>
        ))}
      </div>

      {/* Price */}
      <div className="mb-4">
        <h3 className="font-medium">Max Price: ₹{filters.maxPrice}</h3>
        <input
          type="range"
          min="500"
          max="5000"
          step="100"
          value={filters.maxPrice}
          onChange={(e) =>
            setFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) }))
          }
          className="w-full"
        />
      </div>

      {/* Rating */}
      <div className="mb-4">
        <h3 className="font-medium">Minimum Rating: {filters.rating}⭐</h3>
        <input
          type="range"
          min="1"
          max="5"
          step="1"
          value={filters.rating}
          onChange={(e) =>
            setFilters(prev => ({ ...prev, rating: Number(e.target.value) }))
          }
          className="w-full"
        />
      </div>

      {/* Sort */}
      <div>
        <h3 className="font-medium mb-2">Sort By</h3>
        <select
          value={filters.sort}
          onChange={(e) =>
            setFilters(prev => ({ ...prev, sort: e.target.value }))
          }
          className="w-full p-2 border rounded"
        >
          <option value="">None</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;
