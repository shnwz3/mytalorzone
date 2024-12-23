import React, { useState } from 'react';
import ProductCard from './ProductCard'; // Assuming ProductCard is a separate component

const categories = [
  {
    id: '1',
    name: 'Traditional',
    price: 'Starts from ₹999',
    imageUrl: 'https://images.unsplash.com/photo-1524504259109-ddd837233694?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGRyZXNzfGVufDB8fDB8fHww',
    url: '/collections/traditional',
    products: [
      {
        id: '1',
        name: 'Traditional Saree',
        price: 1499,
        imageUrl: 'https://images.unsplash.com/photo-1581598473593-e6d7e5b528e0?auto=format&fit=crop&q=80',
      },
      {
        id: '2',
        name: 'Kurtis Set',
        price: 999,
        imageUrl: 'https://images.unsplash.com/photo-1591460730775-ef9a39d5688d?auto=format&fit=crop&q=80',
      },
    ],
  },
  {
    id: '2',
    name: 'Western',
    price: 'Starts from ₹799',
    imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80',
    url: '/collections/western',
    products: [
      {
        id: '3',
        name: 'Casual Western Dress',
        price: 799,
        imageUrl: 'https://images.unsplash.com/photo-1580482867153-951727034d5b?auto=format&fit=crop&q=80',
      },
      {
        id: '4',
        name: 'Jeans and Top Set',
        price: 1299,
        imageUrl: 'https://images.unsplash.com/photo-1542322716-dac235698c69?auto=format&fit=crop&q=80',
      },
    ],
  },
  // Add more categories and products as needed...
];

export default function Collections() {
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
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id}>
              <h3 className="text-2xl font-bold mb-6">{category.name}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                    onToggleWishlist={handleToggleWishlist}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
