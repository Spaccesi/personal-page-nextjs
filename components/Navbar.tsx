import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import useTranslation from 'next-translate/useTranslation'
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import SocialIcons from './SocialIcons';

const Navbar = () => {

  const { t, lang } = useTranslation();

  const links = [
    {
      title: t('common:Home'),
      link: '/'
    },
    {
      title: t('common:Portfolio'),
      link: 'https://portfolio.spaccesi.com/'
    }
  ]

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav)
  }

  return(
    <div className='z-50 fixed w-full md:h-28 lg:h-36 h-24 border-black dark:border-white border-b-2'>
      <div className='flex justify-between items-center h-full px-4 2xl:px-6 bg-gradient-to-r from-white dark:from-black/70'>
        <Link href={'/'}>
          <Image src='/favicon.ico' width={50} height={50} alt='Agustin Spaccesi' />
        </Link>
        <div>
          <ul className='hidden md:flex align-middle'>
          {links.map((link, idx) => (
            <Link key={idx} href={link.link}>
              <li className='ml-10 hover:scale-110'>{link.title}</li>
            </Link>
          ))}
            <li className='ml-10 hover:scale-110'><a href="assets/Resume-agustin-spaccesi.pdf" target="_blank">{t('common:Resume')}</a></li>
            <li className='ml-10'><LanguageSwitcher /></li>
            <li className='ml-10'><ThemeSwitcher /></li>
          </ul>
        </div>
        <div className={ nav ? 'hidden' : 'md:hidden z-50'} onClick={handleNav}>
          <AiOutlineMenu size={25}/>
        </div>
      </div>

      <div className={ nav ? 'z-50 md:hidden fixed flex flex-col top-0 left-0 w-screen h-full bg-black/90 justify-center text-white' : 'hidden' }>
        <div className='px-4 md:h-28 lg:h-36 h-24 flex justify-end items-center w-full' >
          <AiOutlineClose size={25} onClick={handleNav}/>
        </div>
        <ul className='my-auto'>
          {links.map((link, idx) => (
            <Link key={idx} href={link.link}>
              <li className='ml-10 py-4 text-3xl uppercase hover:border-b' onClick={handleNav}>{link.title}</li>
            </Link>
          ))}
          <li className='ml-10 py-4 text-3xl uppercase hover:border-b'><a href="assets/Resume-agustin-spaccesi.pdf" target="_blank">{t('common:Resume')}</a></li>
        </ul>
        <div className='my-auto flex justify-center'>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}

export default Navbar;