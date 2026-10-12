import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Reveal from '../components/Reveal';
import Toast from '../components/Toast';
import { useAuth } from '../context/AuthContext';
import { allTripsData } from './Trips'; // استيراد بيانات الرحلات

const bookingSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  travelDate: Yup.string().required('Travel date is required'),
  travelers: Yup.number().min(1, 'At least 1 traveler').required('Required'),
});

export default function TripDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const [toast, setToast] = useState(null);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // البحث عن الرحلة المطابقة للـ ID القادم من الرابط، وإذا لم توجد يتم جلب رحلة افتراضية
  const foundTrip = allTripsData.find((t) => t.id === id);
  const trip = foundTrip || {
    id: 't1',
    title: 'Kyoto Zen & Temple Sanctuary Expedition',
    location: 'Kyoto & Tokyo, Japan',
    price: 3400,
    duration: '7 Days / 6 Nights',
    description: 'Immerse yourself in centuries of architectural mastery, tranquil Zen gardens, and elite culinary traditions across Kyoto and Tokyo.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    included: ['Luxury Ryokan & Hotel Stays', 'Private Cultural Guides', 'All Traditional Dinners', 'Bullet Train Transfers'],
    itinerary: [
      { day: 'Day 01', title: 'Arrival & Welcome Dinner' },
      { day: 'Day 02', title: 'Zen Gardens & Cultural Tour' },
      { day: 'Day 03', title: 'Nature Trails & Tea Ceremony' },
      { day: 'Day 04', title: 'Departure & Memories' },
    ]
  };

  const handleBookingSubmit = (values, { resetForm }) => {
    if (!user) {
      setToast({ message: 'Please sign in to complete your booking.', type: 'error' });
      return;
    }

    const bookingId = `TRV-${Math.floor(100000 + Math.random() * 900000)}`;
    const newBooking = {
      bookingId,
      tripId: trip.id,
      tripName: trip.title,
      ...values,
      bookingDate: new Date().toLocaleDateString(),
      status: 'Confirmed'
    };

    const userKey = `bookings_${user.email || user.id}`;
    const existingBookings = JSON.parse(localStorage.getItem(userKey)) || [];
    localStorage.setItem(userKey, JSON.stringify([...existingBookings, newBooking]));

    setConfirmedBooking(newBooking);
    setToast({ message: 'Booking confirmed successfully!', type: 'success' });
    resetForm();
  };

  return (
    <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-32 pb-24 px-6 md:px-12 transition-colors duration-300">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-2">{trip.location} &bull; {trip.duration}</span>
          <h1 className="text-4xl md:text-6xl font-light tracking-editorial mb-6">{trip.title}</h1>
        </Reveal>

        {/* Hero Image */}
        <Reveal delay={200}>
          <div className="shutter-card aspect-[21/9] rounded mb-12 shadow-2xl overflow-hidden">
            <img src={trip.image} alt={trip.title} className="w-full h-full object-cover" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h3 className="text-2xl font-light tracking-editorial mb-4">Expedition Overview</h3>
              <p className="text-graphite dark:text-ashGray leading-relaxed font-light text-lg">{trip.description}</p>
            </div>

            <div>
              <h3 className="text-2xl font-light tracking-editorial mb-4">What Is Included</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(trip.included || ['Luxury Accommodation', 'Private Guided Tours', 'All Transfers']).map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 rtl:space-x-reverse text-sm font-mono text-graphite dark:text-ashGray">
                    <span className="text-emerald-700">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-light tracking-editorial mb-6">Daily Itinerary</h3>
              <div className="space-y-4">
                {(trip.itinerary || [
                  { day: 'Day 01', title: 'Arrival & Welcome' },
                  { day: 'Day 02', title: 'Guided Exploration' },
                  { day: 'Day 03', title: 'Departure' }
                ]).map((itin, idx) => (
                  <div key={idx} className="border-l-2 border-obsidian dark:border-parchment pl-6 py-2">
                    <span className="text-xs font-mono text-ashGray uppercase">{itin.day}</span>
                    <h4 className="text-lg font-normal tracking-editorial">{itin.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Booking Box */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 border border-graphite/20 dark:border-graphite/40 p-8 bg-white/60 dark:bg-charcoalDeep/60 shadow-xl">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-graphite/10 dark:border-graphite/30">
                <span className="text-xs uppercase tracking-caps text-ashGray">Investment</span>
                <span className="text-3xl font-mono font-light">${trip.price}</span>
              </div>

              {confirmedBooking ? (
                <div className="space-y-6 text-center py-6">
                  <div className="text-emerald-600 text-5xl">✓</div>
                  <h3 className="text-2xl font-light tracking-editorial">Booking Confirmed</h3>
                  <p className="text-xs font-mono text-ashGray">Booking ID: {confirmedBooking.bookingId}</p>
                  <Link to="/bookings" className="block w-full py-4 bg-obsidian text-gallery dark:bg-parchment dark:text-obsidian text-xs uppercase tracking-caps text-center">
                    View My Bookings
                  </Link>
                </div>
              ) : (
                <Formik
                  initialValues={{ fullName: user?.name || '', email: user?.email || '', phone: '', travelDate: '', travelers: 1 }}
                  validationSchema={bookingSchema}
                  onSubmit={handleBookingSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form className="space-y-4">
                      <div>
                        <label className="block text-xs uppercase tracking-caps text-ashGray mb-1">Full Name</label>
                        <Field name="fullName" className="w-full px-4 py-3 bg-white dark:bg-charcoalDeep border border-graphite/20 dark:border-graphite/40 text-sm" />
                        <ErrorMessage name="fullName" component="div" className="text-red-500 text-xs mt-1" />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-caps text-ashGray mb-1">Email</label>
                        <Field name="email" type="email" className="w-full px-4 py-3 bg-white dark:bg-charcoalDeep border border-graphite/20 dark:border-graphite/40 text-sm" />
                        <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-caps text-ashGray mb-1">Phone Number</label>
                        <Field name="phone" className="w-full px-4 py-3 bg-white dark:bg-charcoalDeep border border-graphite/20 dark:border-graphite/40 text-sm" />
                        <ErrorMessage name="phone" component="div" className="text-red-500 text-xs mt-1" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs uppercase tracking-caps text-ashGray mb-1">Travel Date</label>
                          <Field name="travelDate" type="date" className="w-full px-4 py-3 bg-white dark:bg-charcoalDeep border border-graphite/20 dark:border-graphite/40 text-sm" />
                          <ErrorMessage name="travelDate" component="div" className="text-red-500 text-xs mt-1" />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-caps text-ashGray mb-1">Travelers</label>
                          <Field name="travelers" type="number" min="1" className="w-full px-4 py-3 bg-white dark:bg-charcoalDeep border border-graphite/20 dark:border-graphite/40 text-sm" />
                          <ErrorMessage name="travelers" component="div" className="text-red-500 text-xs mt-1" />
                        </div>
                      </div>

                      <button type="submit" disabled={isSubmitting} className="w-full py-4 mt-6 bg-obsidian text-gallery dark:bg-parchment dark:text-obsidian text-xs uppercase tracking-caps hover:bg-graphite transition-all">
                        Book This Trip
                      </button>
                    </Form>
                  )}
                </Formik>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}