import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="bg-emerald-300 shadow">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="font-bold text-lg text-gray-800">Sauced</Link>
            </div>
            <div className="flex items-center">
              <Link to="/search" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-emerald-100 rounded-md">Search</Link>
              <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-emerald-100 rounded-md">About</Link>
              <Link to="/random" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-emerald-100 rounded-md">Surprise Me</Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="header">
        <h2 className="text-2xl font-medium text-gray-600 m-2">Step 1: Find Drink, Step 2: Drink, Step 3: Profit?</h2>
      </div>
    </div>
  );
}

export default Header;