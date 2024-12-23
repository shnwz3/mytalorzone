import React, { useState } from 'react';

export default function ProductCard({ product, onAddToCart, onToggleWishlist }) {
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onToggleWishlist(product, !isLiked);
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  return (
    <div className="group border rounded-lg p-4">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button
          onClick={handleLike}
          className={`absolute top-4 right-4 p-2 rounded-full ${
            isLiked ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          {isLiked ? '♥' : '♡'}
        </button>
      </div>
      <h3 className="text-lg font-medium">{product.name}</h3>
      <p className="text-gray-600">₹{product.price}</p>
      <div className="flex items-center mt-4 space-x-4">
        <button
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          className="px-3 py-1 border rounded-lg"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="px-3 py-1 border rounded-lg"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-4 px-6 py-2 bg-black text-white rounded-lg w-full"
      >
        Add to Cart
      </button>
    </div>
  );
}
