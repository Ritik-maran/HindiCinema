import React from "react";
import Nav from "./Nav";
import Footer from './Footer';

const About = () => {
  return (
    <>
      <Nav />

      <section className="bg-gray-900 text-white py-16 px-6 md:px-24">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-yellow-500">
            About <span className="text-blue-500">MovieZone</span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Your ultimate destination for Hindi movies. Discover, explore, and fall in love with Bollywood like never before!
          </p>
        </div>

        {/* Mobile-first: flex-col, on md+ grid with 2 columns */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-10 items-center">
          
          {/* Image - full width on mobile, partial on desktop */}
          <div className="w-full flex justify-center mb-8 md:mb-0">
            <img
              src="https://www.shutterstock.com/shutterstock/videos/1101050155/thumb/12.jpg?ip=x480"
              alt="Hindi Movie Illustration"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>

          {/* Content */}
          <div className="text-left max-w-lg">
            <h2 className="text-3xl font-semibold text-yellow-500 mb-6">
              What Makes Us Special?
            </h2>
            <ul className="space-y-5">
              {[
                "A curated collection of the latest and greatest Hindi movies, from timeless classics to blockbuster hits.",
                "Comprehensive movie details, trailers, and reviews tailored for Bollywood enthusiasts.",
                "User-friendly platform with personalized recommendations and advanced search filters.",
                "Stay updated with upcoming Hindi movie releases and celebrity news."
              ].map((point, i) => (
                <li key={i} className="flex items-start">
                  <div className="text-xl mr-4">⭐</div>
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-yellow-500 mb-5">
            Join the Bollywood Magic!
          </h3>
          <p className="text-gray-400 mb-7 max-w-xl mx-auto">
            Dive into the world of Hindi cinema and let your movie journey begin.
          </p>
          <a
            href="#explore"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg shadow-lg inline-block"
          >
            Explore Now
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
