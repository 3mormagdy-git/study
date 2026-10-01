import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-[#011C40] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-center text-center">
        <span className="inline-block bg-[#26658C]/40 text-[#A7EBF2] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4 border border-[#54ACBF]/30">
          New Arrival Collection
        </span>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl mb-6">
          Discover Quality Products Designed For You
        </h1>
        
        <p className="text-lg text-gray-300 max-w-xl mb-8">
          Explore our handpicked selection of top-tier items built for everyday comfort, style, and reliability.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#bestsellers"
            className="bg-[#54ACBF] hover:bg-[#26658C] text-[#011C40] hover:text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-colors"
          >
            Shop Now
          </a>
          <Link
            to="/signup"
            className="border border-[#54ACBF] text-[#A7EBF2] hover:bg-[#54ACBF]/20 font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;