import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#011C40] text-gray-300 border-t border-[#26658C]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-[#A7EBF2] mb-3">StoreHub</h3>
            <p className="text-sm text-gray-400">
              Your trusted destination for secure, user-focused online shopping experiences.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#A7EBF2] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-[#A7EBF2] transition-colors">Shopping Cart</Link>
              </li>
              <li>
                <Link to="/signin" className="hover:text-[#A7EBF2] transition-colors">Sign In</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Educational Notice</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              This application uses localStorage for frontend authentication and state persistence as part of a learning project.
            </p>
          </div>
        </div>

        <div className="border-t border-[#26658C]/30 pt-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} StoreHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
