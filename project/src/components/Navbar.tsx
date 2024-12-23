import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User } from 'lucide-react';

export default function Navbar() {
  const handleAddToCart = async () => {
    try {
      const userId = 'mock-user-id'; // Replace with actual user ID
      const productId = 'mock-product-id'; // Replace with actual product ID
      const productQty = 1; // Default to adding 1 item
  
      const response = await fetch('http://localhost:3000/api/cart/addtocart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, productId, productQty }),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert('Product added to cart!');
        console.log('Cart Response:', data.cart); // Optional
      } else {
        alert(data.message || 'Failed to add product to cart.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding to cart.');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
          <Link to="/">
              <h1 className="text-2xl font-serif font-bold">Mytalorzone</h1>
              <p className="text-xs text-gray-500">By Sahiba</p>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/new-arrivals" className="text-gray-700 hover:text-black">New Arrivals</Link>
            <Link to="/traditional" className="text-gray-700 hover:text-black">Traditional</Link>
            <Link to="/western" className="text-gray-700 hover:text-black">Western</Link>
            <Link to="/Trendy" className="text-gray-700 hover:text-black">Trendy</Link>
            <Link to="/AllProducts" className="text-gray-700 hover:text-black">Collection</Link>


          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-5 h-5" />
            </button>
            <button
              className="p-2 hover:bg-gray-100 rounded-full"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
            
          </div>
        </div>
      </div>
    </nav>
  );
}
