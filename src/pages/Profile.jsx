import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

export default function Profile() {
  const { user, logout } = useAuth();
  const { language } = useLanguage();
  const navigate = useNavigate();

  // إذا لم يكن مسجلاً، أعده للصفحة الرئيسية
  if (!user) {
    navigate('/');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const t = {
    EN: {
      title: "Private Portfolio",
      desc: "Manage your aesthetic journeys and account details.",
      nameLabel: "Full Name",
      emailLabel: "Email Address",
      logoutBtn: "Sign Out",
      memberSince: "Member since 2026"
    },
    AR: {
      title: "الملف الشخصي",
      desc: "إدارة رحلاتك وتفاصيل حسابك الخاص.",
      nameLabel: "الاسم الكامل",
      emailLabel: "البريد الإلكتروني",
      logoutBtn: "تسجيل الخروج",
      memberSince: "عضو منذ ٢٠٢٦"
    }
  }[language];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 flex justify-center">
      <div className="w-full max-w-2xl bg-gallery dark:bg-obsidian/40 border border-graphite/10 dark:border-graphite/30 p-8 md:p-12 transition-colors">
        
        <div className="flex items-center space-x-6 rtl:space-x-reverse mb-10 border-b border-graphite/10 dark:border-graphite/30 pb-8">
          <div className="w-20 h-20 bg-obsidian dark:bg-gallery text-gallery dark:text-obsidian rounded-full flex items-center justify-center text-3xl font-light tracking-editorial">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-3xl font-light tracking-editorial">{t.title}</h1>
            <p className="text-graphite dark:text-ashGray text-sm">{t.desc}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-1">{t.nameLabel}</span>
            <p className="text-lg font-medium">{user.name}</p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-1">{t.emailLabel}</span>
            <p className="text-lg font-medium">{user.email}</p>
          </div>
          <div>
            <span className="text-xs text-ashGray font-mono block">{t.memberSince}</span>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-12 px-6 py-3 border border-obsidian dark:border-parchment text-obsidian dark:text-parchment hover:bg-obsidian hover:text-gallery dark:hover:bg-parchment dark:hover:text-obsidian transition-all text-xs uppercase tracking-caps"
        >
          {t.logoutBtn}
        </button>
      </div>
    </div>
  );
}