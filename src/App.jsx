import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ShopContextProvider } from './context/Shop-context';
import Footer from './compounts/Footer';
import Home from './hompadge/Home';
import Cart from './cart/Cart';
import Signin from './signin/Signin';
import Signup from './signup/Signup';
import Productdetailes from './compounts/Productdetailes';
import ProtectedRoute from './compounts/ProtectedRoute ';

function App() {
  return (
    <AuthProvider>
      <ShopContextProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-white text-[#011C40]">
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:productId" element={<Productdetailes />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                
                <Route
                  path="/cart"
                  element={
                    <ProtectedRoute>
                      <Cart />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ShopContextProvider>
    </AuthProvider>
  );
}

export default App;