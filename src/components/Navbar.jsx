import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle menu option click and close the menu
  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="relative">
      <div
        className={`flex justify-between items-center px-6 py-4 bg-yellow-400 text-white shadow-md border border-gray-200 fixed
                    transition-all duration-300 w-full`}
        style={{
          borderRadius: '50px',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          maxWidth: '1200px',
          zIndex: 10,
        }}
      >
        {/* Logo */}
        <h1 className="text-white text-3xl font-extrabold font-cursive">
          Nature's Delight
        </h1>

        {/* Hamburger Menu (Visible only on mobile) */}
        <div
          className="text-white text-2xl cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Navbar Links */}
        <ul
          className={`md:flex items-center gap-8 md:gap-4 py-4 md:py-0 md:static absolute top-full left-1/2 transform md:transform-none -translate-x-1/2 bg-yellow-400 md:bg-transparent
                      transition-all duration-500 ease-in-out ${menuOpen ? 'scale-y-100' : 'scale-y-0'}
                      md:scale-y-100 md:flex-row flex-col text-center list-none`}
          style={{
            borderRadius: '20px',
            zIndex: 5,
            transformOrigin: 'top',
          }}
        >
          <li className="hover:scale-110 transform transition-all duration-300 ease-in-out py-2 px-6 rounded font-medium">
            <Link to="/" className="transition-colors duration-300 ease-in-out" onClick={handleMenuClick}>
              Home
            </Link>
          </li>
          <li className="hover:scale-110 transform transition-all duration-300 ease-in-out py-2 px-6 rounded font-medium">
            <Link to="/about" className="transition-colors duration-300 ease-in-out" onClick={handleMenuClick}>
              About
            </Link>
          </li>
          <li className="hover:scale-110 transform transition-all duration-300 ease-in-out py-2 px-6 rounded font-medium">
            <Link to="/subscriptions" className="transition-colors duration-300 ease-in-out" onClick={handleMenuClick}>
              Subscriptions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
