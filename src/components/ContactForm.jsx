import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const CONTACT_EMAIL = 'inquiries@aurajourneys.com';
const MESSAGE_MIN = 10;

// Messages are translation keys so errors switch language instantly.
const validationSchema = Yup.object({
  name: Yup.string().trim().min(2, 'validation.nameMin').required('validation.nameRequired'),
  email: Yup.string().trim().email('validation.emailInvalid').required('validation.emailRequired'),
  subject: Yup.string().trim().min(3, 'validation.subjectMin').required('validation.subjectRequired'),
  message: Yup.string().trim().min(MESSAGE_MIN, 'validation.messageMin').required('validation.messageRequired'),
});

const labelClass = 'text-xs uppercase tracking-caps text-ashGray font-mono block';

export default function ContactForm() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(null);

  // There is no backend, so submitting opens the visitor's email app with the
  // message pre-filled. We never claim the message was delivered.
  const buildMailto = (values) => {
    const body = `${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`;
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`;
  };

  const formik = useFormik({
    initialValues: { name: '', email: '', subject: '', message: '' },
    validationSchema,
    onSubmit: (values) => {
      const mailto = buildMailto(values);
      setSent({ name: values.name.trim(), mailto });
      window.location.href = mailto;
    },
  });

  const fieldError = (name) =>
    formik.touched[name] && formik.errors[name] ? t(formik.errors[name], { count: MESSAGE_MIN }) : null;

  const inputClass = (name) =>
    `w-full bg-parchment dark:bg-charcoalDeep border px-4 py-3 text-sm text-obsidian dark:text-gallery focus:outline-none font-light transition-colors ${
      fieldError(name)
        ? 'border-red-500 focus:border-red-500'
        : 'border-graphite/20 dark:border-graphite/40 focus:border-obsidian dark:focus:border-gallery'
    }`;

  const field = (name, id) => ({
    id,
    ...formik.getFieldProps(name),
    className: inputClass(name),
    'aria-required': 'true',
    'aria-invalid': fieldError(name) ? 'true' : 'false',
    'aria-describedby': fieldError(name) ? `${id}-error` : undefined,
  });

  const errorMessage = (name, id) =>
    fieldError(name) && (
      <p id={`${id}-error`} role="alert" className="text-red-500 text-xs mt-1">
        {fieldError(name)}
      </p>
    );

  if (sent) {
    return (
      <div role="status" className="py-12 text-center space-y-4">
        <span className="text-xs font-mono uppercase tracking-caps text-ashGray">{t('contactForm.successSub')}</span>
        <h3 className="text-2xl font-light tracking-editorial text-obsidian dark:text-gallery">
          {t('contactForm.successTitle', { name: sent.name })}
        </h3>
        <p className="text-graphite dark:text-ashGray text-sm font-light max-w-md mx-auto leading-relaxed">
          {t('contactForm.successDesc', { email: CONTACT_EMAIL })}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <a
            href={sent.mailto}
            className="min-h-[44px] inline-flex items-center justify-center px-6 py-3 bg-obsidian text-gallery dark:bg-parchment dark:text-obsidian text-xs uppercase tracking-caps hover:bg-graphite transition-all"
          >
            {t('contactForm.openAgain')}
          </a>
          <button
            type="button"
            onClick={() => { formik.resetForm(); setSent(null); }}
            className="min-h-[44px] px-6 py-3 border border-obsidian dark:border-parchment text-obsidian dark:text-parchment text-xs uppercase tracking-caps hover:bg-obsidian hover:text-gallery dark:hover:bg-parchment dark:hover:text-obsidian transition-all"
          >
            {t('contactForm.writeAnother')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={formik.handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="home-contact-name" className={labelClass}>{t('contactForm.nameLabel')}</label>
          <input type="text" autoComplete="name" placeholder={t('contactForm.namePlaceholder')} {...field('name', 'home-contact-name')} />
          {errorMessage('name', 'home-contact-name')}
        </div>
        <div className="space-y-2">
          <label htmlFor="home-contact-email" className={labelClass}>{t('contactForm.emailLabel')}</label>
          <input type="email" autoComplete="email" placeholder="omar@domain.com" {...field('email', 'home-contact-email')} />
          {errorMessage('email', 'home-contact-email')}
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="home-contact-subject" className={labelClass}>{t('contactForm.subjectLabel')}</label>
        <input type="text" placeholder={t('contactForm.subjectPlaceholder')} {...field('subject', 'home-contact-subject')} />
        {errorMessage('subject', 'home-contact-subject')}
      </div>
      <div className="space-y-2">
        <label htmlFor="home-contact-message" className={labelClass}>{t('contactForm.messageLabel')}</label>
        <textarea rows="5" placeholder={t('contactForm.messagePlaceholder')} {...field('message', 'home-contact-message')} />
        {errorMessage('message', 'home-contact-message')}
      </div>
      <button
        type="submit"
        className="w-full min-h-[48px] py-4 bg-obsidian dark:bg-gallery text-gallery dark:text-obsidian text-xs uppercase tracking-caps hover:bg-graphite dark:hover:bg-parchment transition-all duration-300"
      >
        {t('contactForm.submitBtn')}
      </button>
      <p className="text-ashGray text-xs font-light leading-relaxed">{t('contactForm.note')}</p>
    </form>
  );
}
