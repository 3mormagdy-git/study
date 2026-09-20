import React from 'react';
import Hero from '../compounts/Hero';
import NavBar from '../compounts/Navbar';
import Best from '../compounts/ Best-seller';
import Product from '../compounts/Product';
import Footer from '../compounts/Footer';


export default function Home() {
    return (
        <div className="bg-[#142A44] w-screen min-h-full max-h-full text-[#DCEAF7]  " >
            <NavBar />
            <Hero />
            <Best />
            < Product />
            <Footer />
            
        </div>
    );
}