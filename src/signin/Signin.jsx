import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../context/AuthContext';

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required'),
});

const Signin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [authError, setAuthError] = useState('');

  const from = location.state?.from?.pathname || '/';

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SigninSchema,
    onSubmit: (values, { setSubmitting }) => {
      setAuthError('');
      try {
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
        
        const foundUser = existingUsers.find(
          (u) => u.email === values.email && u.password === values.password
        );

        if (!foundUser) {
          setAuthError('Invalid email or password.');
          setSubmitting(false);
          return;
        }

        login(foundUser);
        navigate(from, { replace: true });
      } catch (error) {
        console.error('Signin error:', error);
        setAuthError('An unexpected error occurred during signin.');
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
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-[#26658C]">
            Or{' '}
            <Link to="/signup" className="font-medium text-[#54ACBF] hover:text-[#023859]">
              create a new account
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
                autoComplete="current-password"
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
              {formik.isSubmitting ? 'Signing in...' : 'Sign In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;