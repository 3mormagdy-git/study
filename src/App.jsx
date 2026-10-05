import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';

import ScrollToTop from './components/scrollToTop/ScrollToTop'; 
import Navbar from './components/navbar/NavBar'; // تم تصحيح حرف c ليكون صغيراً
import Footer from './components/footer/Footer'; // تم تصحيح حرف c ليكون صغيراً
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Trips from './pages/Trips'; 
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/signin/Signin'; // تم تصحيح حرف i ليكون صغيراً (Signin)
import SignUp from './pages/signup/Signup'; // تم تصحيح حرف u ليكون صغيراً (Signup)
import Profile from './pages/Profile';
import TripDetails from './pages/TripDetails';

export default function App() {
    return (
        <AuthProvider>
            <ThemeProvider>
                <LanguageProvider>
                    <Router>
                        <ScrollToTop />
                        <div className="flex flex-col min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment font-sans transition-colors duration-300">
                            <Navbar />
                            <main className="flex-grow">
                                <Routes>
                                    <Route path="/trip/:tripId" element={<TripDetails />} />
                                    <Route path="/" element={<Home />} />
                                    <Route path="/destinations" element={<Destinations />} />
                                    <Route path="/trips" element={<Trips />} />
                                    <Route path="/trips/:countryId" element={<Trips />} />
                                    <Route path="/services" element={<Services />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/contact" element={<Contact />} />
                                    <Route path="/signin" element={<SignIn />} />
                                    <Route path="/signup" element={<SignUp />} />
                                    <Route path="/profile" element={<Profile />} />
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