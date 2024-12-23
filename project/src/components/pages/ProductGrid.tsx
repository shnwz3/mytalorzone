import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link for navigation

export default function ProductGrid({ title, products }) {
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 1; // Default quantity for each product
      return acc;
    }, {})
  );

  const [wishlist, setWishlist] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = false; // Default "not liked" for each product
      return acc;
    }, {})
  );

  const handleQuantityChange = (id, change) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + change), // Prevent quantity going below 1
    }));
  };

  const handleAddToCart = (productId) => {
    const quantity = quantities[productId];
    alert(`Added ${quantity} of product ${productId} to cart!`);
    // Add your cart logic here
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group border rounded-lg p-4 relative">
              {/* Wishlist Icon */}
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-lg hover:scale-110 transition-transform z-10"
                onClick={() => toggleWishlist(product.id)}
              >
                <Heart
                  className={`w-6 h-6 ${wishlist[product.id] ? 'text-red-500' : 'text-gray-400'}`}
                  fill={wishlist[product.id] ? 'currentColor' : 'none'}
                />
              </button>

              {/* Product Image with Link to ViewPage */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Link to={`/product/${product.id}`}> {/* Link to ViewPage */}
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
              </div>

              {/* Product Details */}
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-600 mb-4">₹{product.price}</p>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-2 mb-4">
                <button
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                  onClick={() => handleQuantityChange(product.id, -1)}
                >
                  -
                </button>
                <span className="px-4 py-2 bg-gray-100 rounded-lg">{quantities[product.id]}</span>
                <button
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                  onClick={() => handleQuantityChange(product.id, 1)}
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                className="mt-4 px-6 py-2 bg-black text-white rounded-lg w-full"
                onClick={() => handleAddToCart(product.id)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
