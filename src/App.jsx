import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';

import ScrollToTop from './components/scrollToTop/ScrollToTop'; 
import Navbar from './components/navbar/NavBar'; 
import Footer from './components/footer/Footer'; 
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Trips from './pages/Trips';
import TripDetails from './pages/TripDetails';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/signin/Signin'; 
import SignUp from './pages/signup/Signup'; 
import Profile from './pages/Profile';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LanguageProvider>
          <Router>
            <ScrollToTop />

            <div className="flex flex-col min-h-screen bg-transparent text-obsidian dark:text-parchment font-sans transition-colors duration-300 relative z-10">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/destinations" element={<Destinations />} />
                  <Route path="/trips" element={<Trips />} /> 
                  <Route path="/trips/:countryId" element={<Trips />} />
                  <Route path="/trip/:tripId" element={<TripDetails />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}