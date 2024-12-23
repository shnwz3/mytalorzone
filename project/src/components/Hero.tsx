import React from 'react';
import Collections from './pages/Collections';
import FeaturedCategories from './FeaturedCategories';
import NewArrivals from './NewArrivals';
import Newsletter from './Newsletter';

export default function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80"
            alt="Hero fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-35" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-serif text-white font-bold">
              Discover Your Style
            </h1>
            <p className="mt-4 text-xl text-white">
              Explore our latest collection of creative and unique clothing designs
            </p>
            <button className="mt-8 px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <div className="pt-16"> {/* Added padding to separate from hero */}
        <FeaturedCategories />
        <NewArrivals />
        <Newsletter />

      </div>
    </div>
  );
}
