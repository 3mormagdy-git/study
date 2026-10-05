import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function SignIn() {
  const { login } = useAuth();
  const navigate = useNavigate();

  // إعداد Yup Validation
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  // إعداد Formik
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // استخراج الاسم من الإيميل كمثال مؤقت لحين ربط الباك إند
      const extractedName = values.email.split('@')[0];
      login({
        name: extractedName.charAt(0).toUpperCase() + extractedName.slice(1),
        email: values.email,
      });
      navigate('/');
    },
  });

  return (
    <div className="min-h-screen flex bg-parchment dark:bg-charcoalDeep transition-colors duration-300">
      
      {/* Image Section */}
      <div className="hidden md:block md:w-1/2 relative overflow-hidden bg-graphite/10 dark:bg-graphite/30">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop"
          alt="Travel Sanctuary"
          className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-obsidian/10 dark:bg-charcoalDeep/40"></div>
        <div className="absolute bottom-12 left-12 text-parchment">
          <span className="text-xs font-mono uppercase tracking-caps block mb-2 opacity-80">Member Access</span>
          <h2 className="text-3xl font-light tracking-editorial">Return to your journey.</h2>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md space-y-12">
          
          <div className="space-y-3">
            <Link to="/" className="text-xs font-mono uppercase tracking-caps text-ashGray hover:text-obsidian dark:hover:text-gallery transition-colors">
              &larr; Back to Home
            </Link>
            <h1 className="text-4xl font-light tracking-editorial text-obsidian dark:text-gallery pt-4">
              Sign In
            </h1>
            <p className="text-graphite dark:text-ashGray text-sm font-light">
              Enter your credentials to access your private itineraries.
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-caps text-ashGray font-mono block">Email Address</label>
              <input
                type="email"
                name="email"
                {...formik.getFieldProps('email')}
                className={`w-full bg-transparent border-b py-3 text-sm text-obsidian dark:text-gallery focus:outline-none font-light transition-colors ${
                  formik.touched.email && formik.errors.email 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-graphite/30 dark:border-graphite/50 focus:border-obsidian dark:focus:border-gallery'
                }`}
                placeholder="omar@domain.com"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
              ) : null}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs uppercase tracking-caps text-ashGray font-mono block">Password</label>
                <Link to="#" className="text-xs text-ashGray hover:text-obsidian dark:hover:text-gallery transition-colors">
                  Forgot?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                {...formik.getFieldProps('password')}
                className={`w-full bg-transparent border-b py-3 text-sm text-obsidian dark:text-gallery focus:outline-none font-light transition-colors ${
                  formik.touched.password && formik.errors.password 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-graphite/30 dark:border-graphite/50 focus:border-obsidian dark:focus:border-gallery'
                }`}
                placeholder="••••••••"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
              ) : null}
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-4 bg-obsidian dark:bg-gallery text-gallery dark:text-obsidian text-xs uppercase tracking-caps hover:bg-graphite dark:hover:bg-parchment transition-all duration-300"
            >
              Access Account
            </button>
          </form>

          <div className="text-center pt-6 border-t border-graphite/10 dark:border-graphite/30">
            <span className="text-xs text-graphite dark:text-ashGray font-light">
              Don't have an account?{' '}
              <Link to="/signup" className="text-obsidian dark:text-gallery font-medium hover:underline">
                Request Access
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}