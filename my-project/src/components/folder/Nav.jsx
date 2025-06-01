import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiHome, HiInformationCircle, HiEnvelope } from 'react-icons/hi2';
import { Search } from 'lucide-react';
import { Menu } from 'lucide-react'; // Hamburger icon
import Data from '../Data.json';

const Nav = () => {
  const [searchInput, setSearchInput] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const search = () => {
    const query = searchInput.trim().toLowerCase();
    const match = Data.find(movie => movie.title.toLowerCase() === query);
    match ? window.open(match.download_link, '_blank') : alert('Movie not found');
    setSearchInput('');
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-md w-full">
      <div className="flex items-center justify-between px-4 py-3 gap-4 overflow-x-auto whitespace-nowrap">
        {/* Brand */}
        <div className="text-lg font-bold flex-shrink-0">
          🎬 MovieZone
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-4 text-sm font-medium">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? 'text-blue-400' : 'hover:text-blue-300'
            }
          >
            <div className="flex items-center gap-1">
              <HiHome /> Home
            </div>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-blue-400' : 'hover:text-blue-300'
            }
          >
            <div className="flex items-center gap-1">
              <HiInformationCircle /> About
            </div>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-blue-400' : 'hover:text-blue-300'
            }
          >
            <div className="flex items-center gap-1">
              <HiEnvelope /> Contact
            </div>
          </NavLink>
        </nav>

        {/* Search */}
        <div className="flex gap-2 items-center flex-shrink-0 w-28 sm:w-44">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search"
            className="bg-gray-800 text-white px-2 py-1 rounded-md text-xs sm:text-sm w-full placeholder:text-gray-400"
          />
          <button
            onClick={search}
            className="bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded-md text-xs"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1 rounded hover:bg-gray-800"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-gray-800 px-4 flex justify-around py-0 border-t border-gray-700">
          <NavLink
            to="/home"
            className="block py-1 text-sm hover:text-blue-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center gap-1">
              <HiHome /> Home
            </div>
          </NavLink>
          <NavLink
            to="/about"
            className="block py-1 text-sm hover:text-blue-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center gap-1">
              <HiInformationCircle /> About
            </div>
          </NavLink>
          <NavLink
            to="/contact"
            className="block py-1 text-sm hover:text-blue-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center gap-1">
              <HiEnvelope /> Contact
            </div>
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Nav;
