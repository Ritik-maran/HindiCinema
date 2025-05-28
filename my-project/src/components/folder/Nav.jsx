import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiHome, HiInformationCircle, HiEnvelope } from 'react-icons/hi2';
import Data from '../Data.json';
import { Search } from 'lucide-react';


const Nav = () => {
  const [searchInput, setSearchInput] = useState('');

  const search = () => {
    const query = searchInput.trim().toLowerCase();
    const match = Data.find(movie => movie.title.toLowerCase() === query);
    match ? window.open(match.download_link, '_blank') : alert('Movie not found');
    setSearchInput('');
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-md w-full overflow-x-auto">
      <div className="flex items-center justify-between px-4 py-3 gap-2 flex-nowrap whitespace-nowrap overflow-x-auto">
        
        {/* Brand */}
        <div className="text-xl sm:text-2xl font-bold flex-shrink-0">
          🎬 MovieZone
        </div>

        {/* Nav Links with Icons */}
        <nav className="flex gap-4 sm:gap-6 text-sm sm:text-base flex-shrink-0">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `flex items-center gap-1 sm:gap-2 ${isActive ? 'text-blue-400 font-semibold' : 'hover:text-blue-300'}`
            }
          >
            <HiHome className="text-lg sm:text-xl" />
           
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center gap-1 sm:gap-2 ${isActive ? 'text-blue-400 font-semibold' : 'hover:text-blue-300'}`
            }
          >
            <HiInformationCircle className="text-lg sm:text-xl" />
        
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center gap-1 sm:gap-2 ${isActive ? 'text-blue-400 font-semibold' : 'hover:text-blue-300'}`
            }
          >
            <HiEnvelope className="text-lg sm:text-xl" />
            
          </NavLink>
        </nav>

        {/* Search */}
        <div className="flex gap-2 items-center flex-shrink">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search movie"
            className="bg-gray-800 text-white px-2 sm:px-3 py-1.5 rounded-md text-xs sm:text-sm w-32 sm:w-48 placeholder:text-gray-400"
          />
         <button
  onClick={search}
  className="bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-md text-xs sm:text-sm flex items-center justify-center"
>
  <Search className="w-4 h-4 text-white" />
</button>

        </div>

      </div>
    </header>
  );
};

export default Nav;
