import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const Navbar = () => {

  const links = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About',
      link: '#about'
    },
    {
      title: 'Portfolio',
      link: 'https://portfolio.spaccesi.com/'
    },
    {
      title: 'Contact',
      link: '#contact'
    },
  ]

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav)
  }

  return(
    <div className='fixed w-full h-20'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-6'>
        <Image src='/favicon.ico' width={50} height={50} alt='Agustin Spaccesi' />
        <div>
          <ul className='hidden md:flex'>
          {links.map((link, idx) => (
              <Link key={idx} href={link.link}>
                <li className='ml-10 text-sm hover:border-b'>{link.title}</li>
              </Link>
          ))}
          </ul>
        </div>
        <div className='md:hidden' onClick={handleNav}>
          <AiOutlineMenu size={25}/>
        </div>
      </div>

      <div className={ nav ? 'md:hidden fixed top-0 left-0 w-full h-full bg-black/70' : 'h-full' }>
        <div className={ nav 
          ? 'fixed top-0 left-0 w-[75%] sm:w[60%] md:w-[45%] h-screen bg-white p-3 ease-in duration-300'
          :'fixed top-0 left-[-100%] h-screen ease-in duration-300'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <Image src='/favicon.ico' alt='Agustin Spaccesi' width={50} height={50}/>
              </Link>
              <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3'  onClick={handleNav}>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-400 my-4'>
              <p>Let's build something great together</p>
            </div>
            <ul className=''>
              {links.map((link, idx) => (
                <Link key={idx} href={link.link}>
                  <li className='ml-10 py-4 text-sm hover:border-b'>{link.title}</li>
                </Link>
              ))}
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-black'>amsdlk</p>
              <div className='flex items-center justify-between my-4 w-full'>
                <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3'>
                  <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3'>
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