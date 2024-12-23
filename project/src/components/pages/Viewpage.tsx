import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams for route parameters

const ViewPage = ({ products }) => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find((p) => p.id === id); // Find the product by ID

  if (!product) {
    return <div>Product not found</div>; // Handle the case where the product is not found
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full max-w-lg object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-serif font-bold mb-4">{product.name}</h2>
            <p className="text-lg text-gray-600 mb-6">{product.description}</p>
            <p className="text-xl font-semibold text-gray-800 mb-6">₹{product.price}</p>

            {/* Add to Cart Button */}
            <button className="px-6 py-2 bg-black text-white rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
