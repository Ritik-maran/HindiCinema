import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10 px-5 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 text-center md:grid-cols-4 md:text-left">
        
        {/* Brand Info */}
        <div>
          <h1 className="text-white text-2xl font-bold mb-3">🎬 MovieZone</h1>
          <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            Discover, stream, and download trending movies. Built for movie lovers, designed for performance.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
            <li><a href="#LogIn" className="hover:text-blue-400">Login</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:support@moviezone.com" className="hover:text-blue-400">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-400">Report a Bug</a></li>
            <li><a href="#" className="hover:text-blue-400">FAQs</a></li>
          </ul>
        </div>

        {/* Legal + Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400">Terms & Conditions</a></li>
            <li className="flex justify-center md:justify-start space-x-3 mt-2">
              {/* Replace with icons later */}
              <a href="#" className="hover:text-blue-500">Twitter</a>
              <a href="#" className="hover:text-blue-500">Instagram</a>
              <a href="#" className="hover:text-blue-500">YouTube</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-600 mt-10 border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} MovieZone. All rights reserved. | Powered by React & Tailwind
      </div>
    </footer>
  );
};

export default Footer;
