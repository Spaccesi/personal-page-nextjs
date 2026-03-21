import { useRouter } from 'next/router';
import { LOCALE_FLAGS, DEFAULT_LOCALE } from '@/constants/locales';
import { Locale } from '@/types';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, locales, pathname, query } = router;

  const currentLocale = (locale ?? DEFAULT_LOCALE) as Locale;
  const currentLocaleIndex = locales?.indexOf(currentLocale) ?? 0;

  // Calculate next locale with proper cycling
  const nextLocaleIndex = locales ? (currentLocaleIndex + 1) % locales.length : 0;
  const nextLocale = locales?.[nextLocaleIndex] ?? DEFAULT_LOCALE;

  const handleLocaleChange = () => {
    router.push({ pathname, query }, undefined, { locale: nextLocale });
  };

  return (
    <button
      onClick={handleLocaleChange}
      className='text-lg hover:text-xl cursor-pointer'
      aria-label={`Switch to ${nextLocale}`}
      type='button'
    >
      {LOCALE_FLAGS[currentLocale].icon}
    </button>
  );
};

export default LanguageSwitcher;