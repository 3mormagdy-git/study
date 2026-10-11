import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function SignIn() {
  const { login } = useAuth();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const t = {
    EN: {
      imgLabel: "Member Access",
      imgTitle: "Return to your journey.",
      back: "← Back to Home",
      title: "Sign In",
      desc: "Enter your credentials to access your private itineraries.",
      emailLabel: "Email Address",
      passwordLabel: "Password",
      submitBtn: "Access Account",
      noAccount: "Don't have an account?",
      signupLink: "Request Access",
      emailInvalid: "Invalid email address format",
      emailRequired: "Email is required",
      passwordMin: "Password must be at least 6 characters",
      passwordRequired: "Password is required"
    },
    AR: {
      imgLabel: "دخول الأعضاء",
      imgTitle: "عُد إلى رحلتك.",
      back: "→ العودة للرئيسية",
      title: "تسجيل الدخول",
      desc: "أدخل بياناتك للوصول إلى مسارات رحلاتك الخاصة.",
      emailLabel: "البريد الإلكتروني",
      passwordLabel: "كلمة المرور",
      submitBtn: "الدخول إلى الحساب",
      noAccount: "ليس لديك حساب؟",
      signupLink: "طلب انضمام",
      emailInvalid: "صيغة البريد الإلكتروني غير صحيحة",
      emailRequired: "البريد الإلكتروني مطلوب",
      passwordMin: "يجب أن تتكون كلمة المرور من ٦ أحرف على الأقل",
      passwordRequired: "كلمة المرور مطلوبة"
    }
  }[language];

  // إعداد Yup Validation
  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t.emailInvalid)
      .required(t.emailRequired),
    password: Yup.string()
      .min(6, t.passwordMin)
      .required(t.passwordRequired),
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
        <div className="absolute bottom-12 start-12 text-parchment">
          <span className="text-xs font-mono uppercase tracking-caps block mb-2 opacity-80">{t.imgLabel}</span>
          <h2 className="text-3xl font-light tracking-editorial">{t.imgTitle}</h2>
        </div>
      </div>

      {/* Form Section — pt-28 يترك مساحة لشريط التنقل الثابت */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8 pt-28 pb-8 md:px-16 md:pb-16">
        <div className="w-full max-w-md space-y-12">

          <div className="space-y-3">
            <Link to="/" className="text-xs font-mono uppercase tracking-caps text-ashGray hover:text-obsidian dark:hover:text-gallery transition-colors">
              {t.back}
            </Link>
            <h1 className="text-4xl font-light tracking-editorial text-obsidian dark:text-gallery pt-4">
              {t.title}
            </h1>
            <p className="text-graphite dark:text-ashGray text-sm font-light">
              {t.desc}
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-6" noValidate>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="signin-email" className="text-xs uppercase tracking-caps text-ashGray font-mono block">{t.emailLabel}</label>
              <input
                id="signin-email"
                type="email"
                autoComplete="email"
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
              <label htmlFor="signin-password" className="text-xs uppercase tracking-caps text-ashGray font-mono block">{t.passwordLabel}</label>
              <input
                id="signin-password"
                type="password"
                autoComplete="current-password"
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
              {t.submitBtn}
            </button>
          </form>

          <div className="text-center pt-6 border-t border-graphite/10 dark:border-graphite/30">
            <span className="text-xs text-graphite dark:text-ashGray font-light">
              {t.noAccount}{' '}
              <Link to="/signup" className="text-obsidian dark:text-gallery font-medium hover:underline">
                {t.signupLink}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
