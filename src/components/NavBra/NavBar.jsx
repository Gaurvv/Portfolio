import React, { useState, useEffect } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { TbBracketsAngle } from 'react-icons/tb';
import { IoBagHandle } from 'react-icons/io5'; // ✅ Fixed import
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { CiMail } from 'react-icons/ci';

function NavBar({ scrollToHome, scrollToSkills, scrollToProjects, scrollToContact }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemStyles = `
    flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg
    text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50
    transition-all duration-300 ease-in-out backdrop-blur-sm
    border border-transparent hover:border-emerald-500/20
  `;

  const navItems = (
    <>
      <li className={navItemStyles} onClick={() => { scrollToHome(); closeMenu(); }}>
        <FaRegUser className='text-sm' /> Home
      </li>
      <li className={navItemStyles} onClick={() => { scrollToSkills(); closeMenu(); }}>
        <TbBracketsAngle className='text-sm' /> Skills
      </li>
      <li className={navItemStyles} onClick={() => { scrollToProjects(); closeMenu(); }}>
        <IoBagHandle className='text-sm' /> Projects
      </li>
      <li className={navItemStyles} onClick={() => { scrollToContact(); closeMenu(); }}>
        <CiMail className='text-sm' /> Contact
      </li>
    </>
  );

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? 'scale-100 opacity-100' : 'scale-100 opacity-90'
      }`}
    >
      <div className={`
        bg-slate-900/80 backdrop-blur-md border border-slate-700/50 
        rounded-2xl px-6 py-3 shadow-2xl shadow-emerald-500/10
        transition-all duration-300 hover:shadow-emerald-500/20
      `}>
        {/* Desktop Nav */}
        <ul className='hidden md:flex gap-2 items-center'>
          {navItems}
        </ul>

        {/* Mobile Toggle */}
        <div className='md:hidden flex items-center'>
          {isOpen ? (
            <IoMdClose onClick={toggleMenu} className='text-2xl text-emerald-400 cursor-pointer' />
          ) : (
            <IoMdMenu onClick={toggleMenu} className='text-2xl text-emerald-400 cursor-pointer' />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className='md:hidden mt-2 bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 shadow-2xl'>
          <ul className='flex flex-col gap-2'>
            {navItems}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
