import React, { useEffect, useRef, useState } from 'react';
import Data from '../Data.json';
import Nav from './Nav';
import Footer from './Footer';

const SCROLL_SPEED = 1; // pixels per frame for smooth auto scroll

const Home = () => {
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(0);

  // Responsive cards per page for lower grid
  const getCardsPerPage = () => {
    const width = window.innerWidth;
    if (width >= 1024) return 6;
    if (width >= 768) return 4;
    if (width >= 480) return 2;
    return 1;
  };

  const cardsPerPage = getCardsPerPage();
  const totalPages = Math.ceil(Data.length / cardsPerPage);

  // Smooth auto scroll animation for upper marquee
  useEffect(() => {
    const scrollStep = () => {
      if (!scrollContainerRef.current) return;
      const el = scrollContainerRef.current;
      el.scrollLeft += SCROLL_SPEED;
      // Loop back to start for infinite effect
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
      animationRef.current = requestAnimationFrame(scrollStep);
    };
    animationRef.current = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  // Duplicate data for seamless infinite scroll in marquee
  const marqueeData = [...Data, ...Data];

  // Paginated cards for lower section
  const paginatedData = Data.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

  return (
    <>
      <Nav />

      {/* Upper auto-scrolling marquee */}
      <section className="bg-zinc-900 text-white py-6 overflow-hidden">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-400">
          Trending Now 
        </h2>

        <div
          ref={scrollContainerRef}
          className="flex space-x-4 whitespace-nowrap overflow-x-hidden cursor-default select-none"
          style={{ scrollBehavior: 'auto' }}
        >
          {marqueeData.map((movie, index) => (
            <div
              key={index}
              className="inline-block rounded-lg overflow-hidden bg-zinc-800"
              style={{ width: '200px', flexShrink: 0 }}
            >
              <img
                src={movie.poster_image}
                alt={movie.title}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-2 text-center">
                <h3 className="text-sm font-semibold text-green-400 truncate">
                  {movie.title}
                </h3>
                <p className="text-xs text-yellow-300">
                  Rating :{''}
                  <span
                    className={`px-2 py-1 rounded ${
                      movie.rating > 6 ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {movie.rating}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lower paginated movie cards */}
      <section className="bg-zinc-900 text-white px-4 py-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-400">
          Browse Movies
        </h2>

        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: `repeat(auto-fill, minmax(200px, 1fr))` }}
        >
          {paginatedData.map((movie, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden bg-zinc-800"
            >
              <img
                src={movie.poster_image}
                alt={movie.title}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-2 text-center">
                <h3 className="text-sm font-semibold text-green-400 truncate">
                  {movie.title}
                </h3>
                <p className="text-xs text-yellow-300">
                  Rating :{''}
                  <span
                    className={`px-2 py-1 rounded ${
                      movie.rating > 6 ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {movie.rating}
                  </span>
                </p>
                <a
                  href={movie.download_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-200 text-xs"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-center mt-6 space-x-3">
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => setCurrentPage(pageIndex)}
              className={`px-4 py-2 rounded ${
                currentPage === pageIndex
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-green-500 hover:text-white'
              } transition`}
            >
              {pageIndex + 1}
            </button>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
