import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: '1',
    name: 'Traditional',
    imageUrl: 'https://images.unsplash.com/photo-1610189337543-1c5d8e64f574?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/traditional',  // This will link to the Traditional page
  },
  {
    id: '2',
    name: 'Western',
    imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80',
    link: '/western',  // Link for Western category
  },
  {
    id: '3',
    name: 'Trendy',
    imageUrl: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80',
    link: '/trendy',  // Link for Trendy category
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Collections</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group relative overflow-hidden rounded-lg">
              <Link to={category.link}> {/* Make image clickable */}
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-medium text-white">{category.name}</h3>
                <Link to={category.link}> {/* Make Shop Now button clickable */}
                  <button className="mt-4 px-6 py-2 bg-white text-black rounded-full opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
