import React, { useState } from 'react';
import ProductCard from './ProductCard';
import products from './iteams.json';

export default function NewArival() {
  const newArrivalProducts = products.filter(product => product.category === "New Arrivals");
  const [sortedProducts, setSortedProducts] = useState(newArrivalProducts);
  const [wishlist, setWishlist] = useState({});
  const [cart, setCart] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleAddToCart = (product, quantity) => {
    alert(`Added ${quantity} of ${product.name} to cart!`);
    setCart((prev) => [...prev, { ...product, quantity }]);
  };

  const handleToggleWishlist = (product, isLiked) => {
    setWishlist((prev) => ({
      ...prev,
      [product.id]: isLiked,
    }));
    alert(
      isLiked
        ? `${product.name} added to wishlist!`
        : `${product.name} removed from wishlist!`
    );
  };

  const handleSortChange = (sortType) => {
    let sorted = [...newArrivalProducts];

    switch (sortType) {
      case 'alphabetic':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'low-high':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setSortedProducts(sorted);
    setIsDropdownOpen(false);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Our New Arrivals</h2>

        {/* Sort Button Dropdown */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Sort Products
          </button>

          {/* Dropdown for sorting options */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg p-4 rounded-md w-48 z-50">
              <button
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                onClick={() => handleSortChange('alphabetic')}
              >
                Sort by Name (A-Z)
              </button>
              <button
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                onClick={() => handleSortChange('low-high')}
              >
                Price: Low to High
              </button>
              <button
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                onClick={() => handleSortChange('high-low')}
              >
                Price: High to Low
              </button>
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
