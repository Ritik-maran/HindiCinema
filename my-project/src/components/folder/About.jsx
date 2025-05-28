import React from "react";
import Nav from "./Nav";
import Footer from './Footer';

const About = () => {
  return (
<>
    <Nav/>

    <section className="bg-gray-900 text-white py-24 px-6 lg:px-24">
     
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-yellow-500">
          About <span className="text-blue-500">MovieZone</span>
        </h1>
        <p className="mt-4 text-gray-400">
          Your ultimate destination for Hindi movies. Discover, explore, and fall in love with Bollywood like never before!
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 items-center">
        <div>
          <img
            src="https://www.shutterstock.com/shutterstock/videos/1101050155/thumb/12.jpg?ip=x480"
            alt="Hindi Movie Illustration"
            className="rounded-lg shadow-lg w-8/12"
          />
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-yellow-500 mb-4">
            What Makes Us Special?
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="text-xl mr-4">⭐</div>
              <p>
                A curated collection of the latest and greatest Hindi movies, from timeless classics to blockbuster hits.
              </p>
            </li>
            <li className="flex items-start">
              <div className="text-xl mr-4">⭐</div>
              <p>
                Comprehensive movie details, trailers, and reviews tailored for Bollywood enthusiasts.
              </p>
            </li>
            <li className="flex items-start">
              <div className=" text-xl mr-4">⭐</div>
              <p>
                User-friendly platform with personalized recommendations and advanced search filters.
              </p>
            </li>
            <li className="flex items-start">
              <div className=" text-xl mr-4">⭐</div>
              <p>
                Stay updated with upcoming Hindi movie releases and celebrity news.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-yellow-500 mb-4">
          Join the Bollywood Magic!
        </h3>
        <p className="text-gray-400 mb-6">
          Dive into the world of Hindi cinema and let your movie journey begin.
        </p>
        <a
          href="#explore"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg shadow-lg"
        >
          Explore Now
        </a>
      </div>
    </section>

   <Footer/>
    </>
  );
};

export default About;
