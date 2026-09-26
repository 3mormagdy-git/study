import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from './signin/Signin';
import Signup from './signup/Signup';
import Padge from './main-padge/Padg1';
import Home from './hompadge/Home';
import Productdetails from './compounts/Productdetailes';
import Cart from './cart/Cart';
import Cartitem from './cart/Cartitem';
import { ShopContextProvider } from './context/Shop-context';function App() {
  return (
  <ShopContextProvider>
    <Routes>
      {<Route path="/" element={<Home/> }    />}
      <Route path="/Signin" element={<Signin/>} /> 
      <Route path="/signup" element={<Signup />} /> 
      <Route path="/Padge" element={< Padge />} />
      <Route path="/product/:id" element={<Productdetails />} />
      <Route path="Cart" element={<Cart/>} />
      <Route path=" Cartitem" element ={< Cartitem/>} />
      </Routes>
    </ShopContextProvider>
  );
}

export default App;