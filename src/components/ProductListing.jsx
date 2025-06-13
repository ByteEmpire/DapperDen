import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import AddToCartButton from '../components/AddToCartButton';

const products = [
  { id: '181', name: 'Men\'s Sneakers', price: '₹2,499', image: 'https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_1280.jpg' },
  { id: '182', name: 'Raincoat', price: '₹1,299', image: 'https://images.unsplash.com/photo-1567955465163-c355df3b74bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '183', name: 'Baseball Cap', price: '₹699', image: 'https://images.unsplash.com/photo-1530398257477-3e1b0b0ed605?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhc2ViYWxsJTIwY2FwfGVufDB8fDB8fHww' },
  { id: '184', name: 'Backpack', price: '₹899', image: 'https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: '185', name: 'Running Shoes', price: '₹1,999', image: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww' },
  { id: '186', name: 'Winter Jacket', price: '₹2,199', image: 'https://images.pexels.com/photos/1868735/pexels-photo-1868735.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: '187', name: 'Sports Cap', price: '₹799', image: 'https://images.unsplash.com/photo-1647528458336-c0eb575af956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHNwb3J0cyUyMGNhcHxlbnwwfHwwfHx8MA%3D%3D' },
  { id: '188', name: 'Outdoor Jacket', price: '₹1,499', image: 'https://images.unsplash.com/photo-1649768722421-bb3e728fb83d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG91dGRvb3IlMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D' },
]

const ProductListing = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 4
  const totalPages = Math.ceil(products.length / productsPerPage)

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  )

  // Intersection Observer Logic
  const observer = useRef()
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting)
        })
      },
      { threshold: 0.5 }
    )

    const currentProductDivs = document.querySelectorAll('.product-card')
    currentProductDivs.forEach((div) => observer.current.observe(div))

    return () => {
      currentProductDivs.forEach((div) => observer.current.unobserve(div))
    }
  }, [currentPage])  // Add `currentPage` to dependencies to reset observer on page change

  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
        Shop Our Products
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {currentProducts.map((product, index) => (
          <motion.div
            key={index}
            className="product-card rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 30,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: 'easeOut',
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{product.price}</p>
              <AddToCartButton 
                product={product} 
                buttonClass="mt-3 w-full bg-black text-white py-1 rounded hover:bg-gray-800" 
              />

            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={handlePrevPage}
          className="bg-black text-white py-2 px-4 rounded-l-md"
        >
          Prev
        </button>
        <div className="flex items-center justify-center px-4 py-2 bg-gray-100 text-black">
          Page {currentPage} of {totalPages}
        </div>
        <button
          onClick={handleNextPage}
          className="bg-black text-white py-2 px-4 rounded-r-md"
        >
          Next
        </button>
      </div>
    </section>
  )
}

export default ProductListing
