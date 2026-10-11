import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function SignUp() {
  const { login } = useAuth();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const t = {
    EN: {
      back: "← Back to Home",
      title: "Join Aura",
      desc: "Create an account to curate your private travel portfolio.",
      nameLabel: "Full Name",
      namePlaceholder: "e.g. Omar",
      emailLabel: "Email Address",
      passwordLabel: "Password",
      submitBtn: "Request Access",
      haveAccount: "Already a member?",
      signinLink: "Sign In",
      imgLabel: "Bespoke Curation",
      imgTitle: "Begin your aesthetic journey.",
      nameMin: "Name must be at least 2 characters",
      nameRequired: "Full Name is required",
      emailInvalid: "Invalid email address format",
      emailRequired: "Email is required",
      passwordMin: "Password must be at least 8 characters",
      passwordRequired: "Password is required"
    },
    AR: {
      back: "→ العودة للرئيسية",
      title: "انضم إلى أورا",
      desc: "أنشئ حساباً لتنظيم ملف رحلاتك الخاص.",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "مثال: عمر",
      emailLabel: "البريد الإلكتروني",
      passwordLabel: "كلمة المرور",
      submitBtn: "طلب الانضمام",
      haveAccount: "عضو بالفعل؟",
      signinLink: "تسجيل الدخول",
      imgLabel: "تنظيم مخصص",
      imgTitle: "ابدأ رحلتك الجمالية.",
      nameMin: "يجب أن يتكون الاسم من حرفين على الأقل",
      nameRequired: "الاسم الكامل مطلوب",
      emailInvalid: "صيغة البريد الإلكتروني غير صحيحة",
      emailRequired: "البريد الإلكتروني مطلوب",
      passwordMin: "يجب أن تتكون كلمة المرور من ٨ أحرف على الأقل",
      passwordRequired: "كلمة المرور مطلوبة"
    }
  }[language];

  // إعداد Yup Validation
  const validationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .min(2, t.nameMin)
      .required(t.nameRequired),
    email: Yup.string()
      .email(t.emailInvalid)
      .required(t.emailRequired),
    password: Yup.string()
      .min(8, t.passwordMin)
      .required(t.passwordRequired),
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
        name: values.name.trim(),
        email: values.email,
      });
      navigate('/');
    },
  });

  return (
    <div className="min-h-screen flex bg-parchment dark:bg-charcoalDeep transition-colors duration-300">

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

            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="signup-name" className="text-xs uppercase tracking-caps text-ashGray font-mono block">{t.nameLabel}</label>
              <input
                id="signup-name"
                type="text"
                autoComplete="name"
                {...formik.getFieldProps('name')}
                className={`w-full bg-transparent border-b py-3 text-sm text-obsidian dark:text-gallery focus:outline-none font-light transition-colors ${
                  formik.touched.name && formik.errors.name
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-graphite/30 dark:border-graphite/50 focus:border-obsidian dark:focus:border-gallery'
                }`}
                placeholder={t.namePlaceholder}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-xs mt-1">{formik.errors.name}</div>
              ) : null}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="signup-email" className="text-xs uppercase tracking-caps text-ashGray font-mono block">{t.emailLabel}</label>
              <input
                id="signup-email"
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
              <label htmlFor="signup-password" className="text-xs uppercase tracking-caps text-ashGray font-mono block">{t.passwordLabel}</label>
              <input
                id="signup-password"
                type="password"
                autoComplete="new-password"
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
              {t.submitBtn}
            </button>
          </form>

          <div className="text-center pt-6 border-t border-graphite/10 dark:border-graphite/30">
            <span className="text-xs text-graphite dark:text-ashGray font-light">
              {t.haveAccount}{' '}
              <Link to="/signin" className="text-obsidian dark:text-gallery font-medium hover:underline">
                {t.signinLink}
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
          <span className="text-xs font-mono uppercase tracking-caps block mb-2 opacity-80">{t.imgLabel}</span>
          <h2 className="text-3xl font-light tracking-editorial">{t.imgTitle}</h2>
        </div>
      </div>

    </div>
  );
}
