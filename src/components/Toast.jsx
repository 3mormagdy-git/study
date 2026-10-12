import React, { useEffect } from 'react';

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColors = {
    success: 'bg-obsidian text-parchment dark:bg-gallery dark:text-obsidian',
    error: 'bg-red-900 text-white',
    info: 'bg-graphite text-white',
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 px-6 py-3 rounded shadow-2xl text-xs uppercase tracking-caps transition-all duration-300 ${bgColors[type] || bgColors.success}`}>
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <span>{message}</span>
        <button onClick={onClose} className="opacity-70 hover:opacity-100 font-bold ml-2">×</button>
      </div>
    </div>
  );
}