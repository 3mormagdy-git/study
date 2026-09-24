import React from 'react';
import Hero from '../compounts/Hero';
import NavBar from '../compounts/NavBar';
import Best from '../compounts/ Best-seller';
import Product from '../compounts/Product';
import Footer from '../compounts/Footer';


export default function Home() {
    return (
        <div className=" bg-gradient-to-t to-blue-[#7777] from-white  w-screen min-h-full max-h-full text-[#000000]  " >
            <NavBar />
            <Hero />
            <Best />
            < Product />
            <Footer />
            
        </div>
    );
}