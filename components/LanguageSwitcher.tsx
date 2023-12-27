import React from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';

const LanguageSwitcher = () => {

  const { locale, locales, asPath } = useRouter();

  const flags: { [index: string]: { icon: string } } = {
    es: {
      icon: '🇪🇸'
    },
    en: {
      icon: '🇬🇧'
    },
    it: {
      icon: '🇮🇹'
    },
    de: {
      icon: '🇩🇪'
    }
  }

  var currentLocaleNumber = locales?.indexOf(locale ?? 'en') ?? 0;

  return (
    <Link href={asPath} className='text-lg hover:text-xl' locale={locales![currentLocaleNumber + 1] ?? 'en'}>
      {flags[locale ?? 'en'].icon}
    </Link>
  );
};

export default LanguageSwitcher;