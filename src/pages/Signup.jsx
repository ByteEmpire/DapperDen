import React from 'react';
import { FaTshirt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Mock logic: Replace with backend integration
    alert('Signup successful!');
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <motion.div
        className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl border border-gray-200"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated Title */}
        <motion.h2
          className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 mb-6 typing-effect overflow-hidden whitespace-nowrap border-r-4 border-gray-800 animate-typing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Step Into Style!
        </motion.h2>

        {/* Branding */}
        <motion.div
          className="flex justify-center items-center space-x-4 mb-6"
          animate={{ color: ['#3b82f6', '#8b5cf6', '#ec4899'] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
        >
          <FaTshirt size={60} />
          <h1 className="text-5xl font-black">DapperDen</h1>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Sign Up
          </motion.button>
        </form>

        {/* Terms */}
        <p className="mt-4 text-sm text-center text-gray-500">
          By signing up, you agree to our{' '}
          <a href="/terms" className="text-blue-600 hover:underline">Terms</a> and{' '}
          <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
        </p>

        {/* Redirect to Login */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:underline">Login here</a>.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
