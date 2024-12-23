import React from 'react';

const products = [
  {
    id: '1',
    name: 'Floral Summer Dress',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    name: 'Elegant Evening Gown',
    price: 149.99,
    imageUrl: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    name: 'Casual Denim Set',
    price: 79.99,
    imageUrl: 'https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&q=80',
  },
  {
    id: '4',
    name: 'Boho Maxi Dress',
    price: 119.99,
    imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80',
  },
];

export default function NewArrivals() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">New Arrivals</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-white text-black rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Quick View
                </button>
              </div>
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-600">₹{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}