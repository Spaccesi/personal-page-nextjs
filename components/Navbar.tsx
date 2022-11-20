import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import LinkList from './LinkList';

const Navbar = () => {

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
            <LinkList />
          </ul>
        </div>
        <div className='md:hidden' onClick={handleNav}>
          <AiOutlineMenu size={25}/>
        </div>
      </div>

      <div className={ nav ? 'md:hidden fixed top-0 left-0 w-full h-full bg-black/70' : 'hidden' }>
        <div className='fixed top-0 left-0 w-[75%] sm:w[60%] md:w-[45%] h-screen bg-white p-3'>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src='/favicon.ico' alt='Agustin Spaccesi' width={50} height={50}/>
              <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3'  onClick={handleNav}>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-400 my-4'>
              <p>Let's build something great together</p>
            </div>
            <ul className=''>
              <LinkList />
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