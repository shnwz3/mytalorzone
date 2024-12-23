import React from 'react';

export default function Newsletter() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-gray-300 mb-8 justify-center it">Subscribe to receive updates about new collections and special offers</p>
        
        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}