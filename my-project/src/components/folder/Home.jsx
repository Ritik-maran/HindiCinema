// src/components/Home.jsx
import React, { useState, useEffect } from 'react';
import Data from '../Data.json';
import Nav from './Nav';
import Footer from './Footer';
import { useSearch } from './SearchContext';

const Home = () => {
  const { searchTerm } = useSearch();
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 6;

  const filteredMovies = Data.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setCurrentPage(1); // reset pagination on new search
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Nav />

      <div className='flex flex-wrap justify-center gap-8 bg-gray-800 text-white py-8 px-4'>
        {currentMovies.length > 0 ? currentMovies.map((movie, index) => (
          <div
            key={index}
            className="movie border-4 border-gray-600 hover:border-gray-300 bg-gray-900 p-4 rounded-2xl flex flex-col items-center w-full sm:w-64 md:w-72 lg:w-80 xl:w-96"
          >
            <img
              onClick={() => window.open(movie.trailer, '_blank')}
              className='rounded-lg w-auto h-64 object-cover mb-4 '
              src={movie.poster_image}
              alt="poster"
            />
            <h2 className='text-green-500 font-bold text-center text-lg mb-1'>
              Title: {movie.title}
            </h2>
            <p className='text-yellow-400 text-center mb-1'>
              Rating:
              <span className={`ml-1 px-2 py-0.5 rounded text-white ${movie.rating > 6 ? 'bg-green-600' : 'bg-red-600'}`}>
                {movie.rating}
              </span>
            </p>
            <a
              className='text-blue-400 hover:underline text-center text-sm'
              href={movie.download_link}
              target='_blank'
              rel='noopener noreferrer'
            >
              Download
            </a>
          </div>
        )) : (
          <p className="text-white text-lg mt-4">No movies found.</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className='flex justify-center items-center gap-4 py-6 bg-red-900 text-white'>
          <button
            className='px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded disabled:opacity-50'
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1
                  ? 'bg-green-600 font-bold'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            className='px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded disabled:opacity-50'
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Home;
