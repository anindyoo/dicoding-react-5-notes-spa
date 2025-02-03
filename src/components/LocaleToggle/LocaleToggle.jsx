import React, { useContext } from 'react';
import { LocaleContext } from '../../App';
import { LanguageIcon } from '@heroicons/react/24/outline';

const LocaleToggle = () => {
  const { locale, setLocale } = useContext(LocaleContext);
  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'id' : 'en');
    localStorage.setItem('locale', locale);
  };

  return (
    <button
      type="button"
      onClick={toggleLocale}
      title="Locale toggler."
      className="
      flex flex-row items-center gap-1
      text-lg
      text-primaryColor dark:text-accentColor30Dark"
    >
      <span ><LanguageIcon className="w-5" /></span>
      <p>
        {
          locale === 'en'
            ? '🇺🇸'
            : '🇮🇩'
        }
      </p>
    </button>
  );
};

export default LocaleToggle;
