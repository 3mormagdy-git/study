import React from 'react';
import Hero from '../compounts/Hero';
import NavBar from '../compounts/Navbar';
import Best from '../compounts/ Best-seller';
import Product from '../compounts/Product';
import Footer from '../compounts/Footer'
export default function Home() {
    return (
        <div className="bg-gradient-to-br from-cyan-950 to-cyan-200/50 w-screen min-h-full max-h-full " >
            <NavBar/>
            <Hero />
            <Best />
            < Product />
            <Footer />

        </div>
    );
}