import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import useTranslation from 'next-translate/useTranslation'
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';

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
    <div className='z-50 fixed w-full md:h-28 lg:h-36 h-24'>
      <div className='flex justify-between items-center h-full px-4 2xl:px-6 border-b-2 backdrop-blur border-black dark:border-white'>
        <Image src='/favicon.ico' width={50} height={50} alt='Agustin Spaccesi' />
        <div>
          <ul className='hidden md:flex'>
          {links.map((link, idx) => (
            <Link key={idx} href={link.link}>
              <li className='ml-10 text-sm hover:animate-bounce'>{link.title}</li>
            </Link>
          ))}
            <li><LanguageSwitcher /></li>
            <li className='ml-10 text-sm hover:animate-bounce'><ThemeSwitcher /></li>
          </ul>
        </div>
        <div className='md:hidden z-50' onClick={handleNav}>
          <AiOutlineMenu size={25}/>
        </div>
      </div>

      <div className={ nav ? 'z-50 md:hidden fixed top-0 left-0 w-full h-full bg-black/70 z-100' : 'hidden' }>
        <div className='fixed top-0 left-0 w-[75%] sm:w[60%] md:w-[45%] h-screen bg-[#1b1b1b] p-3 ease-in duration-300'>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <Image src='/favicon.ico' alt='Agustin Spaccesi' width={50} height={50}/>
              </Link>
              <div className='rounded-full cursor-pointer p-3'  onClick={handleNav}>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-400 my-4'>
              <p>{t('common:sub-title')}</p>
            </div>
            <ul className=''>
              {links.map((link, idx) => (
                <Link key={idx} href={link.link}>
                  <li className='ml-10 py-4 text-sm hover:border-b' onClick={handleNav}>{link.title}</li>
                </Link>
              ))}
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-black'>amsdlk</p>
              <div className='flex items-center justify-between my-4 w-full'>
                <div className='rounded-full cursor-pointer p-3'>
                  <FaLinkedinIn />
                </div>
                <div className='rounded-ful cursor-pointer p-3'>
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;