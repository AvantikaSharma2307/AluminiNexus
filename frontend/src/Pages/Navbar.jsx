import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-sky-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold text-xl">
          <Link to="/"><span className='text-5xl'>A</span>lumni Nexus</Link>
        </div>

        <button
          className="text-white md:hidden"
          onClick={toggleNavbar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <Link
            to="/"
            className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <a
            href="#services"
            className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </a>
          <Link
            to="/contact"
            className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
