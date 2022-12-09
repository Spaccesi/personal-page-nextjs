import React from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';

const LanguageSwitcher = () => {

  const { locale, locales, asPath } = useRouter();

  return (
    <Link href={asPath} className='text-lg hover:text-xl' locale={locales?.filter((local) => {return(local != locale)})[0]}>
      {locale === 'en' 
        ? '🇪🇸'  
        : '🇬🇧'
      }
    </Link>
  );
};

export default LanguageSwitcher;