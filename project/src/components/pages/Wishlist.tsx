import React from 'react';

export default function Wishlist({ wishlist }) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">My Wishlist</h2>
        {wishlist.length === 0 ? (
          <p className="text-center text-gray-500">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {wishlist.map((product) => (
              <div key={product.id} className="group border rounded-lg p-4">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-60 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-600">₹{product.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
