import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-xl font-semibold mb-3">Customer Policies</h2>
            <ul className="space-y-2">
              <li><Link to="/policies/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/policies/faq" className="hover:underline">FAQ</Link></li>
              <li><Link to="/policies/tnc" className="hover:underline">T&C</Link></li>
              <li><Link to="/policies/terms" className="hover:underline">Terms of Use</Link></li>
              <li><Link to="/policies/track" className="hover:underline">Track Orders</Link></li>
              <li><Link to="/policies/shipping" className="hover:underline">Shipping</Link></li>
              <li><Link to="/policies/cancellation" className="hover:underline">Cancellation</Link></li>
              <li><Link to="/policies/returns" className="hover:underline">Returns</Link></li>
              <li><Link to="/policies/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/policies/grievance" className="hover:underline">Grievance Redressal</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">DapperDen</h2>
            <p className="text-sm leading-relaxed">
              DapperDen is your one-stop destination for the latest fashion and lifestyle essentials. Stay stylish, stay confident.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">Connect With Us</h2>
            <p>Email: support@dapperden.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Address: Fashion Street, Mumbai</p>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-400">
          &copy; 2025 DapperDen. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
