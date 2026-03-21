import { useRouter } from 'next/router';
import Link from 'next/link';
import { LOCALE_FLAGS, DEFAULT_LOCALE } from '@/constants/locales';
import { Locale } from '@/types';

const LanguageSwitcher = () => {
  const { locale, locales, asPath } = useRouter();

  const currentLocale = (locale ?? DEFAULT_LOCALE) as Locale;
  const currentLocaleIndex = locales?.indexOf(currentLocale) ?? 0;
  const nextLocale = locales?.[currentLocaleIndex + 1] ?? DEFAULT_LOCALE;

  return (
    <Link
      href={asPath}
      className='text-lg hover:text-xl'
      locale={nextLocale}
      aria-label={`Switch to ${nextLocale}`}
    >
      {LOCALE_FLAGS[currentLocale].icon}
    </Link>
  );
};

export default LanguageSwitcher;