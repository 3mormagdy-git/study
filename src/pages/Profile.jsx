import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user, logout } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();

  // إذا لم يكن مسجلاً، أعده لصفحة تسجيل الدخول
  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 flex justify-center">
      <div className="w-full max-w-2xl bg-gallery dark:bg-obsidian/40 border border-graphite/10 dark:border-graphite/30 p-8 md:p-12 transition-colors">

        <div className="flex items-center space-x-6 rtl:space-x-reverse mb-10 border-b border-graphite/10 dark:border-graphite/30 pb-8">
          <div className="w-20 h-20 bg-obsidian dark:bg-gallery text-gallery dark:text-obsidian rounded-full flex items-center justify-center text-3xl font-light tracking-editorial">
            {(user.name || user.email || '?').charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-3xl font-light tracking-editorial">{t('profile.title')}</h1>
            <p className="text-graphite dark:text-ashGray text-sm">{t('profile.desc')}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-1">{t('profile.nameLabel')}</span>
            <p className="text-lg font-medium">{user.name}</p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-1">{t('profile.emailLabel')}</span>
            <p className="text-lg font-medium">{user.email}</p>
          </div>
          <div>
            <span className="text-xs text-ashGray font-mono block">{t('profile.memberSince')}</span>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-12 px-6 py-3 border border-obsidian dark:border-parchment text-obsidian dark:text-parchment hover:bg-obsidian hover:text-gallery dark:hover:bg-parchment dark:hover:text-obsidian transition-all text-xs uppercase tracking-caps"
        >
          {t('profile.logoutBtn')}
        </button>
      </div>
    </div>
  );
}
