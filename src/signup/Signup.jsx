import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../context/AuthContext';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short')
    .max(50, 'Name is too long')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Signup = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [authError, setAuthError] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values, { setSubmitting }) => {
      setAuthError('');
      try {
        // Retrieve existing users database or initialize
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
        
        // Check if email already exists
        const userExists = existingUsers.some((u) => u.email === values.email);
        if (userExists) {
          setAuthError('An account with this email already exists.');
          setSubmitting(false);
          return;
        }

        // Create new user record with a stable unique ID
        const newUser = {
          id: 'user_' + Date.now(),
          name: values.name,
          email: values.email,
          password: values.password, // Frontend educational storage demo only
        };

        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));

        // Automatically log user in after successful registration
        login(newUser);
        navigate('/');
      } catch (error) {
        console.error('Signup error:', error);
        setAuthError('An unexpected error occurred during signup.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#A7EBF2]/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg border border-[#54ACBF]/20">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#011C40]">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-[#26658C]">
            Or{' '}
            <Link to="/signin" className="font-medium text-[#54ACBF] hover:text-[#023859]">
              sign in to your existing account
            </Link>
          </p>
        </div>

        {authError && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 text-sm text-red-700" role="alert">
            {authError}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#011C40] mb-1">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-[#26658C]/30'
                } placeholder-gray-400 text-[#011C40] rounded-md focus:outline-none focus:ring-[#54ACBF] focus:border-[#54ACBF] sm:text-sm`}
                placeholder="John Doe"
                {...formik.getFieldProps('name')}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="mt-1 text-xs text-red-500">{formik.errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#011C40] mb-1">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-[#26658C]/30'
                } placeholder-gray-400 text-[#011C40] rounded-md focus:outline-none focus:ring-[#54ACBF] focus:border-[#54ACBF] sm:text-sm`}
                placeholder="you@example.com"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="mt-1 text-xs text-red-500">{formik.errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#011C40] mb-1">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-[#26658C]/30'
                } placeholder-gray-400 text-[#011C40] rounded-md focus:outline-none focus:ring-[#54ACBF] focus:border-[#54ACBF] sm:text-sm`}
                placeholder="••••••••"
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="mt-1 text-xs text-red-500">{formik.errors.password}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#023859] hover:bg-[#011C40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#54ACBF] transition-colors"
            >
              {formik.isSubmitting ? 'Creating account...' : 'Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;