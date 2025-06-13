import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import AddToCartButton from '../components/AddToCartButton';


const products = [
  { id: '177',
    name: 'Classic Leather Wallet',
    price: '₹999',
    image: 'https://cdn.pixabay.com/photo/2016/04/13/05/29/wallet-1326017_1280.jpg',
  },
  {
    id: '178',
    name: 'Stylish Sunglasses',
    price: '₹799',
    image: 'https://cdn.pixabay.com/photo/2022/03/18/09/12/shades-7076213_1280.jpg',
  },
  {
    id: '179',
    name: 'Analog Watch',
    price: '₹1,499',
    image: 'https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096_1280.jpg',
  },
  {
    id: '180',
    name: 'Running Shoes',
    price: '₹2,199',
    image: 'https://cdn.pixabay.com/photo/2015/11/05/22/33/sneakers-1024979_1280.jpg',
  },
]

const FeaturedProducts = () => {
  const [inView, setInView] = useState(false)

  // IntersectionObserver logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setInView(true)
        } else {
          setInView(false) // Reset animation when out of view
        }
      },
      { threshold: 0.5 }
    )
    const element = document.querySelector('#products-section')
    if (element) observer.observe(element)

    // Cleanup observer on unmount
    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <section
      id="products-section"
      className="py-12 px-4 bg-gray-50"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
        Featured Products
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 30,
            }}
            transition={{
              duration: 1.0, // Slow down the duration
              delay: index * 0.3, // Delay to stagger the animation
              ease: 'easeOut', // Smooth easing for a pleasant effect
            }}
            className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{product.price}</p>
              <AddToCartButton product={product} buttonClass="mt-3 w-full bg-black text-white py-1 rounded hover:bg-gray-800" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts
