import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/AuthContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PASSWORD_MIN = 8;

// الرسائل هنا مفاتيح ترجمة، وتُترجم عند العرض حتى تتغير فوراً مع تغيير اللغة
const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, 'validation.nameMin')
    .required('validation.nameRequired'),
  email: Yup.string()
    .email('validation.emailInvalid')
    .required('validation.emailRequired'),
  password: Yup.string()
    .min(PASSWORD_MIN, 'validation.passwordMin')
    .required('validation.passwordRequired'),
});

export default function SignUp() {
  const { login } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();

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
        name: values.name.trim(),
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

      {/* Form Section — pt-28 يترك مساحة لشريط التنقل الثابت */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8 pt-28 pb-8 md:px-16 md:pb-16">
        <div className="w-full max-w-md space-y-12">

          <div className="space-y-3">
            <Link to="/" className="text-xs font-mono uppercase tracking-caps text-ashGray hover:text-obsidian dark:hover:text-gallery transition-colors">
              {t('signup.back')}
            </Link>
            <h1 className="text-4xl font-light tracking-editorial text-obsidian dark:text-gallery pt-4">
              {t('signup.title')}
            </h1>
            <p className="text-graphite dark:text-ashGray text-sm font-light">
              {t('signup.desc')}
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-6" noValidate>

            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="signup-name" className="text-xs uppercase tracking-caps text-ashGray font-mono block">{t('signup.nameLabel')}</label>
              <input
                id="signup-name"
                type="text"
                autoComplete="name"
                {...formik.getFieldProps('name')}
                className={inputClass('name')}
                placeholder={t('signup.namePlaceholder')}
              />
              {fieldError('name') && (
                <div className="text-red-500 text-xs mt-1">{fieldError('name')}</div>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="signup-email" className="text-xs uppercase tracking-caps text-ashGray font-mono block">{t('signup.emailLabel')}</label>
              <input
                id="signup-email"
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
              <label htmlFor="signup-password" className="text-xs uppercase tracking-caps text-ashGray font-mono block">{t('signup.passwordLabel')}</label>
              <input
                id="signup-password"
                type="password"
                autoComplete="new-password"
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
              className="w-full py-4 mt-6 bg-obsidian dark:bg-gallery text-gallery dark:text-obsidian text-xs uppercase tracking-caps hover:bg-graphite dark:hover:bg-parchment transition-all duration-300"
            >
              {t('signup.submitBtn')}
            </button>
          </form>

          <div className="text-center pt-6 border-t border-graphite/10 dark:border-graphite/30">
            <span className="text-xs text-graphite dark:text-ashGray font-light">
              {t('signup.haveAccount')}{' '}
              <Link to="/signin" className="text-obsidian dark:text-gallery font-medium hover:underline">
                {t('signup.signinLink')}
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
        <div className="absolute bottom-12 end-12 text-parchment text-end">
          <span className="text-xs font-mono uppercase tracking-caps block mb-2 opacity-80">{t('signup.imgLabel')}</span>
          <h2 className="text-3xl font-light tracking-editorial">{t('signup.imgTitle')}</h2>
        </div>
      </div>

    </div>
  );
}
