import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import useTranslation from 'next-translate/useTranslation';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import SocialIcons from './SocialIcons';
import { NavLink } from '@/types';

const Navbar = () => {
  const { t } = useTranslation('common');
  const [nav, setNav] = useState(false);

  const links: NavLink[] = [
    {
      title: t('Home'),
      link: '/',
    },
  ];

  const toggleNav = () => setNav(!nav);

  return (
    <div className='fixed w-full h-28 z-50'>
      <div className='flex justify-between items-center h-full px-6 lg:px-10'>
        <Link href='/' aria-label='Home'>
          <Image src='/favicon.ico' width={50} height={50} alt='Agustin Spaccesi' />
        </Link>
        <nav>
          <ul className='hidden md:flex align-middle'>
            {links.map((link) => (
              <li key={link.link} className='ml-10'>
                <Link href={link.link} className='hover:scale-110'>
                  {link.title}
                </Link>
              </li>
            ))}
            <li className='ml-10'>
              <LanguageSwitcher />
            </li>
            <li className='ml-10'>
              <ThemeSwitcher />
            </li>
          </ul>
        </nav>
        <button
          className={nav ? 'hidden' : 'md:hidden z-50'}
          onClick={toggleNav}
          aria-label='Toggle menu'
        >
          <AiOutlineMenu size={25} />
        </button>
      </div>

      <div className={nav ? 'z-50 md:hidden fixed flex flex-col top-0 left-0 w-screen h-full bg-black/90 justify-center text-white' : 'hidden'}>
        <div className='px-4 md:h-28 lg:h-36 h-24 flex justify-end items-center w-full'>
          <button onClick={toggleNav} aria-label='Close menu'>
            <AiOutlineClose size={25} />
          </button>
        </div>
        <ul className='my-auto'>
          {links.map((link) => (
            <li key={link.link} className='ml-10 py-4'>
              <Link href={link.link} className='text-3xl uppercase hover:border-b' onClick={toggleNav}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className='my-auto flex justify-center'>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;