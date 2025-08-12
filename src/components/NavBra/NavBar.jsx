import React, { useState, useEffect } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { TbBracketsAngle } from 'react-icons/tb';
import { IoBagHandle } from 'react-icons/io5';
import { CiMail } from 'react-icons/ci';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

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
    flex items-center gap-2 cursor-pointer px-6 py-3 rounded-xl
    text-black text-lg font-medium tracking-wide uppercase
    hover:text-white hover:bg-black hover:scale-105
    transition-all duration-300 ease-in-out
  `;

  const navItems = (
    <>
      <li className={navItemStyles} onClick={() => { scrollToHome(); closeMenu(); }}>
        <FaRegUser className='text-lg' /> Home
      </li>
      <li className={navItemStyles} onClick={() => { scrollToSkills(); closeMenu(); }}>
        <TbBracketsAngle className='text-lg' /> Skills
      </li>
      <li className={navItemStyles} onClick={() => { scrollToProjects(); closeMenu(); }}>
        <IoBagHandle className='text-lg' /> Projects
      </li>
      <li className={navItemStyles} onClick={() => { scrollToContact(); closeMenu(); }}>
        <CiMail className='text-lg' /> Contact
      </li>
    </>
  );

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-sans ${
        scrolled ? 'bg-white/60 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-8 py-4">

        {/* Desktop layout as equal-width grid */}
        <div className="hidden md:grid md:grid-cols-3 md:items-center w-full">

          {/* Left - Logo + Name */}
          <div className="flex items-center space-x-3">
            <div className="group cursor-pointer flex items-center" onClick={scrollToHome}>
              <TbBracketsAngle className='mr-2 bg-black text-white w-12 h-12 rounded-3xl flex items-center justify-center text-3xl shadow-lg shadow-gray-900/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12' />
              <span className="text-black text-2xl font-medium tracking-wide">GAURAV</span>
            </div>
          </div>

          {/* Center - Nav Items */}
          <div className="flex justify-center">
            <ul className="flex gap-8 items-center">
              {navItems}
            </ul>
          </div>

          {/* Right - CV Button */}
          <div className="flex justify-end">
            <a
              href="/cv.pdf"
              download
              className="bg-black text-white text-lg font-medium tracking-wide py-3 px-6 rounded-xl hover:bg-gray-800 hover:scale-105 transition-all duration-300"
            >
              Download CV
            </a>
          </div>

        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center justify-between w-full">
          {/* Logo + Name */}
          <div className="group cursor-pointer flex items-center space-x-2" onClick={scrollToHome}>
            <TbBracketsAngle className='bg-black text-white w-10 h-10 rounded-2xl p-1 shadow-lg shadow-gray-900/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12' />
            <span className="text-black text-lg font-medium tracking-wide">GAURAV</span>
          </div>

          {/* Menu Icon */}
          {isOpen ? (
            <IoMdClose onClick={toggleMenu} className="text-2xl text-black cursor-pointer" />
          ) : (
            <IoMdMenu onClick={toggleMenu} className="text-2xl text-black cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 p-4">
          <ul className="flex flex-col gap-4">
            {navItems}
            <li>
              <a
                href="/cv.pdf"
                download
                className="block bg-black text-white text-center py-3 px-4 rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
