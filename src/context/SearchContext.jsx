// src/context/SearchContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context for the search term
const SearchContext = createContext();

// Create a provider component
export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook to access the search context
export const useSearch = () => {
  return useContext(SearchContext);
};
