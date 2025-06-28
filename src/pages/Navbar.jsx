import { useState } from 'react';
import logoImg from '../assets/images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logoImg} alt="ShaadiSutra Logo" className="w-10 h-10" />
          <span className="font-bold text-xl text-[#7b1c1c]">ShaadiSutra</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-700 text-lg">
          <Link to="/" state={{ scrollTo: 'top' }} className="hover:text-[#7b1c1c]">Home</Link>

          <Link to="/" state={{ scrollTo: 'templates' }} className="hover:text-[#7b1c1c]">Templates</Link>
          <Link to="/" state={{ scrollTo: 'how-it-works' }} className="hover:text-[#7b1c1c]">How It Works</Link>
          <Link to="/login" className="hover:text-[#7b1c1c]">Login</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-[#7b1c1c] focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4 bg-white py-4 shadow-lg rounded-b-lg">
          <Link
  to="/"
  state={{ scrollTo: 'top' }}
  onClick={toggleMenu}
  className="text-gray-700 text-lg hover:text-[#7b1c1c]"
>
  Home
</Link>
          <Link
  to="/"
  state={{ scrollTo: 'templates' }}
  onClick={toggleMenu}
  className="text-gray-700 text-lg hover:text-[#7b1c1c]"
>
  Templates
</Link>

          <Link
  to="/"
  state={{ scrollTo: 'how-it-works' }}
  onClick={toggleMenu}
  className="text-gray-700 text-lg hover:text-[#7b1c1c]"
>
  How It Works
</Link>

          <Link to="/login" onClick={toggleMenu} className="text-gray-700 text-lg hover:text-[#7b1c1c]">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
