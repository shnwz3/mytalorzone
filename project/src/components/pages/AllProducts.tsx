import React, { useState } from 'react';
import ProductCard from './ProductCard';
import products from './iteams.json';

export default function AllProducts() {
  const [wishlist, setWishlist] = useState({});
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOrder, setSortOrder] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceRange, setPriceRange] = useState([0, 2000]); // Example range
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

  // Filter and Sort Logic
  const applyFilters = () => {
    let updatedProducts = [...products];

    // Filter by category
    if (categoryFilter) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === categoryFilter
      );
    }

    // Filter by price range
    updatedProducts = updatedProducts.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
    if (sortOrder === 'alphabetic') {
      updatedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'category') {
      updatedProducts.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortOrder === 'low-high') {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high-low') {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
    setIsDropdownOpen(false); // Close dropdown after applying filters
  };

  // Update price range filter
  const handlePriceRangeChange = (event, index) => {
    const newRange = [...priceRange];
    newRange[index] = Number(event.target.value);
    setPriceRange(newRange);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">All Products</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
            />
          ))}
        </div>
      </div>

      {/* Filter Button at the Top-Right */}
      <div className="fixed top-20 right-4 z-50">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Filter & Sort
        </button>
      </div>

      {/* Dropdown for Filters and Sorting (Floating Above Content) */}
      {isDropdownOpen && (
        <div
          className="fixed top-16 right-4 bg-white shadow-md p-6 rounded-md w-72 z-50 transition-all duration-300 ease-in-out transform"
          style={{ transform: isDropdownOpen ? 'translateY(0)' : 'translateY(-10px)' }}
        >
          <button
            className="absolute top-2 right-2 text-gray-500"
            onClick={() => setIsDropdownOpen(false)}
          >
            &times; {/* Close icon */}
          </button>

          <h3 className="font-bold text-lg mb-4">Filters & Sorting</h3>

          {/* Category Filter */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              className="border p-2 rounded w-full"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Traditional">Traditional</option>
              <option value="Western">Western</option>
              <option value="Trendy">Trendy</option>
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price Range
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                min="0"
                placeholder="Min"
                value={priceRange[0]}
                onChange={(e) => handlePriceRangeChange(e, 0)}
                className="border p-2 rounded w-24"
              />
              <span>-</span>
              <input
                type="number"
                min="0"
                placeholder="Max"
                value={priceRange[1]}
                onChange={(e) => handlePriceRangeChange(e, 1)}
                className="border p-2 rounded w-24"
              />
            </div>
          </div>

          {/* Sorting Option */}
          <div className="mb-4">
            <label htmlFor="sort" className="block text-sm font-medium text-gray-700">
              Sort By
            </label>
            <select
              id="sort"
              className="border p-2 rounded w-full"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="">No Sorting</option>
              <option value="alphabetic">Sort by Name</option>
              <option value="category">Sort by Category</option>
              <option value="low-high">Low Price to High</option>
              <option value="high-low">High Price to Low</option>
            </select>
          </div>

          {/* Apply Filters Button */}
          <div className="text-center">
            <button
              className="bg-green-500 text-white px-6 py-2 rounded"
              onClick={applyFilters}
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
