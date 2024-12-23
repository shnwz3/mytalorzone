import React, { useState } from 'react';
import ProductCard from '../ProductCard';
import products from '../iteams.json';

export default function Trendy() {
  const trendyProducts = products.filter(product => product.category === "Trendy");
  const [wishlist, setWishlist] = useState({});
  const [cart, setCart] = useState([]);

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

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Trendy Dresses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendyProducts.map((product) => (
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
