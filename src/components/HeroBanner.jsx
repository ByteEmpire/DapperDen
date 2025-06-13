import React from 'react'
import { motion } from 'framer-motion'

const HeroBanner = () => {
  return (
    <section
      className="relative w-full h-[450px] md:h-[550px] bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1470&q=80')"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/70 to-[#1e293b]/70 backdrop-blur-sm flex flex-col justify-center items-center text-white text-center px-4">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold mb-4 text-[#f1f5f9]"
        >
          Discover Timeless Style at <span className="text-[#facc15]">DapperDen</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-base md:text-lg text-gray-300 max-w-xl mb-6"
        >
          Fashion crafted for elegance and comfort — made for every moment.
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.4 }}
          className="px-8 py-2 font-medium text-[#0f172a] bg-[#facc15] rounded-full hover:bg-[#fcd34d] transition duration-300 shadow-md"
        >
          Explore Collection
        </motion.button>

      </div>
    </section>
  )
}

export default HeroBanner
