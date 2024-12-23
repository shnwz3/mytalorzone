import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllProducts from './components/pages/AllProducts';


const Hero = lazy(() => import('./components/Hero'));
const Collections = lazy(() => import('./components/pages/Collections'));
const NewArrival = lazy(() => import('./components/pages/NewArival'));
const Traditional = lazy(() => import('./components/pages/collections/Traditional'));
const Western = lazy(() => import('./components/pages/collections/Western'));
const Trendy = lazy(() => import('./components/pages/collections/Trendy'));


function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/traditional" element={<Traditional />} />
              <Route path="/western" element={<Western />} />
              <Route path="/trendy" element={<Trendy />} />
              <Route path="/new-arrivals" element={<NewArrival />} />
              <Route path="/AllProducts" element={<AllProducts />}/>
            </Routes>
          </Suspense>
        </main>
        <footer className="bg-gray-100 py-4 pt-2">
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center text-gray-600">
            <p>© 2024 Mytalorzone By Sahiba. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
