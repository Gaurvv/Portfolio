import React, { useState, useEffect } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { TbBracketsAngle } from 'react-icons/tb';
import { IoBagHandleOutline } from 'react-icons/io5';
import { CiStar, CiMail } from 'react-icons/ci';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f0f0f]/70 backdrop-blur-md'
          : 'bg-gray-900'
      }`}
    >
      {/* Main row */}
      <div className='flex items-center justify-between px-6 md:px-16 py-6 text-gray-100'>
        {/* Logo */}
        <div className="flex items-center group">
          <TbBracketsAngle className='text-3xl bg-gradient-to-r from-cyan-700 to-purple-500 p-2 rounded-2xl h-10 w-10 mr-3 shadow-xl shadow-cyan-500/70 transition-all duration-300' />
          <label className='text-2xl font-semibold cursor-pointer group-hover:text-cyan-400 transition-colors duration-300 ease-in-out'>
            Gauravz
          </label>
        </div>

        {/* Desktop menu */}
        <ul className='hidden md:flex gap-10'>{navItems()}</ul>

        {/* Hamburger */}
        <div className='md:hidden'>
          {isOpen ? (
            <IoMdClose onClick={toggleMenu} className='text-3xl text-cyan-400 cursor-pointer' />
          ) : (
            <IoMdMenu onClick={toggleMenu} className='text-3xl text-cyan-400 cursor-pointer' />
          )}
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {isOpen && (
        <ul className='flex flex-col md:hidden px-6 pb-4 gap-4 text-gray-100'>
          {navItems()}
        </ul>
      )}
    </div>
  );
}

function navItems() {
  const styles =
    'flex items-center gap-2 cursor-pointer border-b-2 border-transparent hover:border-cyan-500 hover:text-cyan-400 hover:shadow-md hover:shadow-cyan-500/50 transition-all duration-300 ease-in-out';
  return (
    <>
      <li className={styles}><FaRegUser className='text-lg' /> Home</li>
      <li className={styles}><TbBracketsAngle className='text-lg' /> Skills</li>
      <li className={styles}><IoBagHandleOutline className='text-lg' /> Projects</li>
      <li className={styles}><CiMail className='text-lg' /> Contact</li>
    </>
  );
}

export default NavBar;
