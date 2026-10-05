import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function SignUp() {
  const { login } = useAuth();
  const navigate = useNavigate();

  // إعداد Yup Validation
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Full Name is required'),
    email: Yup.string()
      .email('Invalid email address format')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  // إعداد Formik
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // تسجيل الدخول بالبيانات الجديدة مباشرة وتوجيه للمتصفح الرئيسي
      login({
        name: values.name,
        email: values.email,
      });
      navigate('/');
    },
  });

  return (
    <div className="min-h-screen flex bg-parchment dark:bg-charcoalDeep transition-colors duration-300">
      
      {/* Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md space-y-12">
          
          <div className="space-y-3">
            <Link to="/" className="text-xs font-mono uppercase tracking-caps text-ashGray hover:text-obsidian dark:hover:text-gallery transition-colors">
              &larr; Back to Home
            </Link>
            <h1 className="text-4xl font-light tracking-editorial text-obsidian dark:text-gallery pt-4">
              Join Aura
            </h1>
            <p className="text-graphite dark:text-ashGray text-sm font-light">
              Create an account to curate your private travel portfolio.
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-caps text-ashGray font-mono block">Full Name</label>
              <input
                type="text"
                name="name"
                {...formik.getFieldProps('name')}
                className={`w-full bg-transparent border-b py-3 text-sm text-obsidian dark:text-gallery focus:outline-none font-light transition-colors ${
                  formik.touched.name && formik.errors.name 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-graphite/30 dark:border-graphite/50 focus:border-obsidian dark:focus:border-gallery'
                }`}
                placeholder="e.g. Omar"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-xs mt-1">{formik.errors.name}</div>
              ) : null}
            </div>

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
              <label className="text-xs uppercase tracking-caps text-ashGray font-mono block">Password</label>
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
              className="w-full py-4 mt-6 bg-obsidian dark:bg-gallery text-gallery dark:text-obsidian text-xs uppercase tracking-caps hover:bg-graphite dark:hover:bg-parchment transition-all duration-300"
            >
              Request Access
            </button>
          </form>

          <div className="text-center pt-6 border-t border-graphite/10 dark:border-graphite/30">
            <span className="text-xs text-graphite dark:text-ashGray font-light">
              Already a member?{' '}
              <Link to="/signin" className="text-obsidian dark:text-gallery font-medium hover:underline">
                Sign In
              </Link>
            </span>
          </div>
        </div>
      </div>

      {/* Image Section (Right Side) */}
      <div className="hidden md:block md:w-1/2 relative overflow-hidden bg-graphite/10 dark:bg-graphite/30">
        <img
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop"
          alt="Resort Sanctuary"
          className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-obsidian/10 dark:bg-charcoalDeep/40"></div>
        <div className="absolute bottom-12 right-12 text-parchment text-right">
          <span className="text-xs font-mono uppercase tracking-caps block mb-2 opacity-80">Bespoke Curation</span>
          <h2 className="text-3xl font-light tracking-editorial">Begin your aesthetic journey.</h2>
        </div>
      </div>

    </div>
  );
}