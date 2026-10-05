import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-obsidian text-parchment pt-20 pb-12 border-t border-graphite/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-graphite/30">
        
        {/* Brand Info */}
        <div className="md:col-span-5 space-y-4">
          <h2 className="text-xl font-medium tracking-caps uppercase text-gallery">
            Aura<span className="text-ashGray font-light">Journeys</span>
          </h2>
          <p className="text-ashGray text-sm max-w-sm font-light leading-relaxed">
            Crafting intentional, bespoke travel experiences for those who seek depth, quiet luxury, and authentic cultural immersion.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 space-y-4">
          <h3 className="text-xs uppercase tracking-caps text-ashGray font-mono">Navigation</h3>
          <ul className="space-y-2 text-sm font-light">
            <li>
              <Link to="/destinations" className="hover:text-gallery transition-colors">Destinations</Link>
            </li>
            <li>
              <Link to="/trips" className="hover:text-gallery transition-colors">Curated Trips</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gallery transition-colors">Services & Bespoke</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gallery transition-colors">Our Philosophy</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Inquiries */}
        <div className="md:col-span-4 space-y-4">
          <h3 className="text-xs uppercase tracking-caps text-ashGray font-mono">Inquiries</h3>
          <p className="text-sm text-ashGray font-light">
            Begin your planning journey with a private consultation.
          </p>
          <Link
            to="/contact"
            className="inline-block text-xs uppercase tracking-caps px-6 py-3 border border-parchment text-parchment hover:bg-parchment hover:text-obsidian transition-all duration-300"
          >
            Start an Inquiry
          </Link>
        </div>
      </div>

      {/* Copyright & Legal */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-ashGray font-mono">
        <p>&copy; {new Date().getFullYear()} Aura Journeys. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span className="hover:text-gallery cursor-pointer">Privacy Policy</span>
          <span className="hover:text-gallery cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}