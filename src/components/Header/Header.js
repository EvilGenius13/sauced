import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import searchImg from './Images/search.png';
import aboutImg from './Images/about.png';
import surpriseImg from './Images/surprise.png';
import logoImg from './Images/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
     <nav className="bg-emerald-500 shadow">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
            <Link to="/" className="block w-40 h-10">
              <img src={logoImg} alt="Sauced" className="h-full w-full object-contain" />
            </Link>
            </div>
            <div className="hidden lg:flex lg:items-center">
              <Link
                to="/search"
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-emerald-100 rounded-md flex items-center"
              >
                <img src={searchImg} alt="search" className="h-6 w-6 mr-1" />
                Search
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-emerald-100 rounded-md flex items-center"
              >
                <img src={aboutImg} alt="about" className="h-6 w-6 mr-1" />
                About
              </Link>
              <Link
                to="/random"
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-emerald-100 rounded-md flex items-center"
              >
                <img src={surpriseImg} alt="surprise me" className="h-6 w-6 mr-1" />
                Surprise Me
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
                onClick={toggleMenu}
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d={isOpen ? "M5 8h14v2H5V8zm0 5h14v2H5v-2z" : "M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden flex flex-wrap justify-center">
            <Link to="/search" className="block px-3 py-2 hover:bg-emerald-100 rounded-md m-2">
            <img src={searchImg} alt="search" className="h-6 w-6" />
            </Link>
            <Link to="/about" className="block px-3 py-2 hover:bg-emerald-100 rounded-md m-2">
            <img src={aboutImg} alt="about" className="h-6 w-6" />
            </Link>
            <Link to="/random" className="block px-3 py-2 hover:bg-emerald-100 rounded-md m-2">
            <img src={surpriseImg} alt="surprise me" className="h-6 w-6" />
            </Link>
          </div>
        )}
      </nav>
      <div className="header">
        <h2 className="text-2xl font-medium text-gray-600 m-2">Step 1: Find Drink, Step 2: Drink, Step 3: Profit?</h2>
      </div>
    </div>
  );
}

export default Header;