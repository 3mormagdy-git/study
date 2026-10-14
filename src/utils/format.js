// Arabic uses the same Arabic-Indic digits as the rest of the Arabic locale file.
const LOCALES = { ar: 'ar-EG', en: 'en-US' };

function localeFor(lang) {
  return String(lang || 'en').startsWith('ar') ? LOCALES.ar : LOCALES.en;
}

export function formatNumber(value, lang) {
  try {
    return new Intl.NumberFormat(localeFor(lang)).format(value);
  } catch {
    return String(value);
  }
}

// Always format from a number — never do arithmetic on the formatted string.
export function formatPrice(amount, lang) {
  try {
    return new Intl.NumberFormat(localeFor(lang), {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `$${amount}`;
  }
}
