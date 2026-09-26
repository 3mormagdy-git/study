import React from 'react';

import NavBar from '../compounts/NavBar';

import Product from '../compounts/Product';
export default function Home() {
    return (
        
        <div className=" bg-gradient-to-t to-blue-[#7777] from-white  w-screen min-h-full max-h-full text-[#000000]  " >
   
            <NavBar />        
            < Product />

        </div>
    );
}