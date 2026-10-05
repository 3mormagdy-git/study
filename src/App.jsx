import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext'; // 👈 استيراد AuthProvider
import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/signin/Signin';
import SignUp from './pages/signup/Signup';
import { LanguageProvider } from './context/LanguageContext';
export default function App() {
    return (
        <AuthProvider>
        <ThemeProvider>
<LanguageProvider>
            <Router>
                <div className="flex flex-col min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment font-sans transition-colors duration-300">
                    <Navbar />
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/destinations" element={<Destinations />} />
                            <Route path="/trips" element={<Destinations />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />                          
                            <Route path="/signin" element={<SignIn />} />
                            <Route path="/signup" element={<SignUp />} />
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