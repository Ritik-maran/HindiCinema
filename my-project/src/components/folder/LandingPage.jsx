import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import Marquee from 'react-fast-marquee';
import Data from '../Data.json';

const LandingPage = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
          autoPlay
          loop
          muted
          playsInline
          src="/videos/hero-trailer.mp4"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-400 mb-6 hover:scale-110 transition-transform duration-500 shadow-lg">
            Stream. Download. Enjoy.
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-xl animate-fadeInDelay">
            MovieZone is your ultimate destination for trending movies. Watch trailers, stream instantly, or download with one click.
          </p>
          <Link
            to="/home"
            className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md transition duration-300"
          >
            Explore Now
          </Link>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-900 overflow-hidden">
        <h2 className="text-3xl font-bold mb-10 text-center text-yellow-400">Trending Now</h2>
        <Marquee pauseOnHover speed={40} gradient={false}>
          {Data.slice(0, 15).map((movie, idx) => (
            <div
              key={idx}
              className="mx-4 cursor-pointer transform hover:scale-110 transition-transform duration-300"
              onClick={() => window.open(movie.trailer, '_blank')}
              title={movie.title}
            >
              <img
                src={movie.poster_image}
                alt={movie.title}
                className="rounded-xl shadow-2xl w-[150px] sm:w-[200px] h-[250px] object-cover border-4 border-gray-700 hover:border-yellow-500"
                loading="lazy"
              />
              <p className="mt-2 text-center text-yellow-300 font-bold truncate w-[150px] sm:w-[200px]">{movie.title}</p>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-gray-900 to-black text-gray-200 animate-fadeInUp">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Why Choose MovieZone?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: 'Trending Content',
              description: 'Always up-to-date with the latest movies from Bollywood, Hollywood, and beyond.'
            },
            {
              title: 'Blazing Speed',
              description: 'Instant streaming, fast downloads, optimized for all networks and devices.'
            },
            {
              title: 'Free & Secure',
              description: 'No hidden fees. No sign-up needed. Just safe, ad-free movie access.'
            }
          ].map(({ title, description }, i) => (
            <div
              key={i}
              className="bg-gray-800 p-8 rounded-2xl shadow-xl transform hover:scale-105 hover:shadow-2xl transition duration-500 border border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-4 text-yellow-300">{title}</h3>
              <p className="text-base text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-900 py-20 text-center text-white px-4">
        <h2 className="text-4xl font-bold mb-6 hover:text-yellow-400 transition-colors duration-300 cursor-default">
          Join the MovieZone Experience
        </h2>
        <p className="mb-8 text-lg animate-bounce">
          Get access to thousands of titles anytime, anywhere.
        </p>
        <Link
          to="/home"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-full transition-transform duration-300 hover:scale-110 shadow-lg"
        >
          Browse Movies
        </Link>
      </section>

      <Footer />

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 2s ease forwards; }
        .animate-fadeInDelay { animation: fadeIn 2s ease forwards 1s; opacity: 0; }
        .animate-fadeInUp { animation: fadeInUp 1.5s ease forwards; opacity: 0; }
      `}</style>
    </div>
  );
};

export default LandingPage;
