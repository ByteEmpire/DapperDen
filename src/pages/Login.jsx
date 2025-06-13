import React from 'react';
import { FaGoogle, FaTshirt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { GoogleLogin } from '@react-oauth/google';
import { motion } from 'framer-motion';

const gradientColors = [
  '#3b82f6', // blue-500
  '#8b5cf6', // purple-500
  '#ec4899', // pink-500
];

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  // Google login success handler
  const handleLoginSuccess = async (response) => {
    const token = response.credential; // Google login token

    // Send token to backend for validation
    try {
      const res = await fetch('http://localhost:5000/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }), // Send the token to the backend
      });

      const data = await res.json();

      if (res.ok) {
        // On successful login, save user data in context and navigate
        const userData = {
          name: data.user.name,
          email: data.user.email,
        };
        login(userData); // Save user data in context
        navigate('/'); // Redirect to home page
      } else {
        console.log('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleLoginFailure = (error) => {
    console.log('Login Failed:', error);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <motion.div
        className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl border border-gray-200"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Typing Animation Title */}
        <motion.h2
          className="text-3xl font-extrabold text-center text-gray-800 mb-6 typing-effect overflow-hidden whitespace-nowrap border-r-4 border-gray-800 animate-typing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Welcome Back!
        </motion.h2>

        {/* T-shirt and DapperDen synced gradient animation */}
        <motion.div
          className="flex justify-center items-center space-x-4 mb-6"
          animate={{ color: gradientColors }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
        >
          <motion.div
            animate={{ color: gradientColors }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            }}
          >
            <FaTshirt size={60} />
          </motion.div>

          <motion.h1
            className="text-5xl font-black"
            animate={{ color: gradientColors }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            }}
          >
            DapperDen
          </motion.h1>
        </motion.div>

        <p className="text-lg text-center text-gray-600 mb-6">
          Please sign in to your account to continue.
        </p>

        {/* Google Login Button */}
        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleLoginSuccess} // Handle success
            onFailure={handleLoginFailure}  // Handle failure
            useOneTap
            theme="outline"
            shape="pill"
            width="100%"
          />
        </div>

        {/* Terms & Signup */}
        <motion.p
          className="mt-6 text-sm text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          By logging in, you agree to our{' '}
          <a href="/terms" className="text-blue-600 hover:underline">
            Terms & Conditions
          </a>{' '}
          and{' '}
          <a href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>.
        </motion.p>

        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="text-sm text-gray-500">
            Don’t have an account?{' '}
            <span
              onClick={() => navigate('/signup')}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Sign up here
            </span>
          </p>
        </motion.div>
      </motion.div>

      {/* Custom CSS inside style tag */}
      <style>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        .typing-effect {
          animation: typing 2s steps(30, end), blink-caret 0.75s step-end infinite;
        }
        @keyframes blink-caret {
          0%, 100% { border-color: transparent }
          50% { border-color: black }
        }
      `}</style>
    </div>
  );
};

export default Login;
