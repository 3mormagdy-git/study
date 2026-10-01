import React from 'react';
import NavBar from '../compounts/NavBar';
import Hero from '../compounts/Hero';
import BestSeller from '../compounts/BestSeller';
import Product from '../compounts/Product';
import Footer from '../compounts/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#011C40]">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <BestSeller />
    <Product />
      </main>
          
      <Footer />
    </div>
  );
};

export default Home;