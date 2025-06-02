// src/components/Nav.jsx
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { HiHome, HiInformationCircle, HiEnvelope } from 'react-icons/hi2';
import { Search, Menu } from 'lucide-react';
import { useSearch } from './SearchContext';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { searchTerm, setSearchTerm } = useSearch();
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/home');
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-md w-full">
      <div className="flex items-center justify-between px-4 py-3 gap-4 overflow-x-auto whitespace-nowrap">
        {/* Brand */}
        <div className="text-lg font-bold flex-shrink-0">🎬 MovieZone</div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-4 text-sm font-medium">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? 'text-blue-400' : 'hover:text-blue-300'
            }
          >
            <div className="flex items-center gap-1"><HiHome /> Home</div>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-blue-400' : 'hover:text-blue-300'
            }
          >
            <div className="flex items-center gap-1"><HiInformationCircle /> About</div>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-blue-400' : 'hover:text-blue-300'
            }
          >
            <div className="flex items-center gap-1"><HiEnvelope /> Contact</div>
          </NavLink>
        </nav>

        {/* Search */}
        <div className="flex gap-2 items-center flex-shrink-0 w-28 sm:w-44">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            className="bg-gray-800 text-white px-2 py-1 rounded-md text-xs sm:text-sm w-full placeholder:text-gray-400"
          />
          <button
            onClick={handleSearch}
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

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden bg-blue-950 px-4 flex justify-around py-2 border-t border-gray-700">
          <NavLink to="/home" className="block py-1 text-sm hover:text-blue-300" onClick={() => setIsMenuOpen(false)}>
            <div className="flex items-center gap-1"><HiHome /> Home</div>
          </NavLink>
          <NavLink to="/about" className="block py-1 text-sm hover:text-blue-300" onClick={() => setIsMenuOpen(false)}>
            <div className="flex items-center gap-1"><HiInformationCircle /> About</div>
          </NavLink>
          <NavLink to="/contact" className="block py-1 text-sm hover:text-blue-300" onClick={() => setIsMenuOpen(false)}>
            <div className="flex items-center gap-1"><HiEnvelope /> Contact</div>
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Nav;
