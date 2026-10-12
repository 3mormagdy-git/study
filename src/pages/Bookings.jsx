import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Reveal from '../components/Reveal';

export default function Bookings() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user) {
      const userBookings = JSON.parse(localStorage.getItem(`bookings_${user.email || user.id}`)) || [];
      setBookings(userBookings);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-32 px-6 text-center">
        <h1 className="text-3xl font-light tracking-editorial mb-4">Please Sign In</h1>
        <p className="text-ashGray mb-6">You need to sign in to view your bookings.</p>
        <Link to="/signin" className="px-6 py-3 bg-obsidian text-gallery dark:bg-parchment dark:text-obsidian text-xs uppercase tracking-caps">
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-32 pb-24 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto mb-12">
        <Reveal>
          <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-2">Confirmed Itineraries</span>
          <h1 className="text-4xl md:text-5xl font-light tracking-editorial">My Bookings</h1>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto">
        {bookings.length === 0 ? (
          <div className="text-center py-24 border border-graphite/10 dark:border-graphite/30">
            <h3 className="text-2xl font-light mb-4">No active bookings found.</h3>
            <p className="text-ashGray mb-8">Ready for your next expedition? Discover our exclusive trips.</p>
            <Link to="/trips" className="px-8 py-4 bg-obsidian text-gallery dark:bg-parchment dark:text-obsidian text-xs uppercase tracking-caps">
              Explore Trips
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <div key={booking.bookingId} className="border border-graphite/10 dark:border-graphite/30 p-6 bg-white/40 dark:bg-charcoalDeep/40 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="px-2.5 py-1 bg-emerald-800/10 text-emerald-700 dark:text-emerald-400 text-xs font-mono uppercase tracking-caps">{booking.status}</span>
                    <span className="text-xs font-mono text-ashGray">ID: {booking.bookingId}</span>
                  </div>
                  <h3 className="text-2xl font-light tracking-editorial">{booking.tripName}</h3>
                  <p className="text-sm text-graphite dark:text-ashGray">Travel Date: <span className="font-mono text-obsidian dark:text-gallery">{booking.travelDate}</span> | Travelers: <span className="font-mono text-obsidian dark:text-gallery">{booking.travelers}</span></p>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase tracking-caps text-ashGray block">Booked On</span>
                  <span className="text-xs font-mono text-obsidian dark:text-gallery">{booking.bookingDate}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}