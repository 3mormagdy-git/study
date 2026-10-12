import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'context/AuthContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PASSWORD_MIN = 6;

// الرسائل هنا مفاتيح ترجمة، وتُترجم عند العرض حتى تتغير فوراً مع تغيير اللغة
const validationSchema = Yup.object({
  email: Yup.string()
    .email('validation.emailInvalid')
    .required('validation.emailRequired'),
  password: Yup.string()
    .min(PASSWORD_MIN, 'validation.passwordMin')
    .required('validation.passwordRequired'),
});

export default function SignIn() {
  const { login } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();

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

  const fieldError = (name) =>
    formik.touched[name] && formik.errors[name]
      ? t(formik.errors[name], { count: PASSWORD_MIN })
      : null;

  const inputClass = (name) =>
    `w-full bg-transparent border-b py-3 text-sm text-obsidian dark:text-gallery focus:outline-none font-light transition-colors ${
      fieldError(name)
        ? 'border-red-500 focus:border-red-500'
        : 'border-graphite/30 dark:border-graphite/50 focus:border-obsidian dark:focus:border-gallery'
    }`;

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
        <div className="absolute bottom-12 start-12 text-parchment">
          <span className="text-xs font-mono uppercase tracking-caps block mb-2 opacity-80">{t('signin.imgLabel')}</span>
          <h2 className="text-3xl font-light tracking-editorial">{t('signin.imgTitle')}</h2>
        </div>
      </div>

      {/* Form Section — pt-28 يترك مساحة لشريط التنقل الثابت */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8 pt-28 pb-8 md:px-16 md:pb-16">
        <div className="w-full max-w-md space-y-12">

          <div className="space-y-3">
            <Link to="/" className="text-xs font-mono uppercase tracking-caps text-ashGray hover:text-obsidian dark:hover:text-gallery transition-colors">
              {t('signin.back')}
            </Link>
            <h1 className="text-4xl font-light tracking-editorial text-obsidian dark:text-gallery pt-4">
              {t('signin.title')}
            </h1>
            <p className="text-graphite dark:text-ashGray text-sm font-light">
              {t('signin.desc')}
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-6" noValidate>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="signin-email" className="text-xs uppercase tracking-caps text-ashGray font-mono block">{t('signin.emailLabel')}</label>
              <input
                id="signin-email"
                type="email"
                autoComplete="email"
                {...formik.getFieldProps('email')}
                className={inputClass('email')}
                placeholder="omar@domain.com"
              />
              {fieldError('email') && (
                <div className="text-red-500 text-xs mt-1">{fieldError('email')}</div>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="signin-password" className="text-xs uppercase tracking-caps text-ashGray font-mono block">{t('signin.passwordLabel')}</label>
              <input
                id="signin-password"
                type="password"
                autoComplete="current-password"
                {...formik.getFieldProps('password')}
                className={inputClass('password')}
                placeholder="••••••••"
              />
              {fieldError('password') && (
                <div className="text-red-500 text-xs mt-1">{fieldError('password')}</div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-4 bg-obsidian dark:bg-gallery text-gallery dark:text-obsidian text-xs uppercase tracking-caps hover:bg-graphite dark:hover:bg-parchment transition-all duration-300"
            >
              {t('signin.submitBtn')}
            </button>
          </form>

          <div className="text-center pt-6 border-t border-graphite/10 dark:border-graphite/30">
            <span className="text-xs text-graphite dark:text-ashGray font-light">
              {t('signin.noAccount')}{' '}
              <Link to="/signup" className="text-obsidian dark:text-gallery font-medium hover:underline">
                {t('signin.signupLink')}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
