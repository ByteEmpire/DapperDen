// src/components/Categories.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import { motion } from 'framer-motion';

// Define categories array
const categories = [
  {
    name: 'Ethnic Wear',
    image: 'https://cdn.pixabay.com/photo/2022/11/20/06/31/woman-7603569_1280.jpg',
  },
  {
    name: 'Casual Wear',
    image: 'https://cdn.pixabay.com/photo/2022/05/27/13/47/woman-7225214_1280.jpg',
  },
  {
    name: 'Western Wear',
    image: 'https://cdn.pixabay.com/photo/2017/08/01/08/29/people-2563491_1280.jpg',
  },
  {
    name: 'Sports Wear',
    image: 'https://cdn.pixabay.com/photo/2017/08/07/23/50/climbing-2609319_1280.jpg',
  },
  {
    name: 'Watches',
    image: 'https://cdn.pixabay.com/photo/2014/12/08/14/23/pocket-watch-560937_1280.jpg',
  },
  {
    name: 'Beauty & Makeup',
    image: 'https://cdn.pixabay.com/photo/2018/01/14/00/05/makeup-3081015_1280.jpg',
  },
  {
    name: 'Office Wear',
    image: 'https://cdn.pixabay.com/photo/2021/11/19/19/28/woman-6810133_1280.jpg',
  },
  {
    name: 'Jewellery',
    image: 'https://cdn.pixabay.com/photo/2023/10/12/13/35/earrings-8310858_1280.jpg',
  },
  {
    name: 'Eye Wear',
    image: 'https://cdn.pixabay.com/photo/2017/07/20/21/08/sunglasses-2523803_1280.jpg',
  },
  {
    name: 'Backpacks',
    image: 'https://cdn.pixabay.com/photo/2017/03/27/16/54/human-2179640_1280.jpg',
  },
  {
    name: 'Kids Wear',  // Add this category
    image: 'https://cdn.pixabay.com/photo/2022/05/31/09/37/toddler-7233172_1280.jpg', 
  }
];

const Categories = () => {
  const [inView, setInView] = useState(false);
  const navigate = useNavigate();  // Initialize useNavigate hook

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false); // Reset animation when out of view
        }
      },
      { threshold: 0.5 }
    );
    const element = document.querySelector('#categories-section');
    if (element) observer.observe(element);

    // Cleanup observer on unmount
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleCategoryClick = (categoryName) => {
    // Navigate to the category page based on clicked category
    navigate(`/category/${categoryName.toLowerCase()}`);
  };

  return (
    <section id="categories-section" className="py-12 px-4 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 30,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: 'easeOut',
            }}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => handleCategoryClick(cat.name)} // Click handler
          >
            <img src={cat.image} alt={cat.name} className="w-full h-48 object-cover" />
            <div className="p-3 text-center bg-gray-100">
              <h3 className="text-sm font-semibold text-gray-700">{cat.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
