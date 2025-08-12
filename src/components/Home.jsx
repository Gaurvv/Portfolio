import React from 'react';
import { TbBracketsAngle } from 'react-icons/tb';

function Home({ scrollToProjects, scrollToContact }) {
  return (
    <div className='text-black min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 px-4 sm:px-6 bg-gray-50 font-sans'>
      
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-300/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl animate-ping delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-8 group">
          <div className="relative">
            <TbBracketsAngle className='bg-black text-gray-50 w-24 h-24 rounded-3xl flex items-center justify-center text-5xl shadow-lg shadow-gray-900/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12' />
            <div className="absolute inset-0 bg-black rounded-3xl blur-xl opacity-15 group-hover:opacity-25 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Headings */}
        <h1 className='font-thin text-6xl md:text-7xl lg:text-8xl text-black text-center mb-2 animate-fade-in-up tracking-widest uppercase'>
          Hello I'm 
        </h1>

        <h2 className='font-extralight text-5xl md:text-6xl lg:text-7xl text-center text-black mb-6 animate-fade-in-up delay-200 tracking-[0.3em] uppercase'>
          GAURAV
        </h2>

        {/* About Text */}
        <p className='text-lg md:text-xl text-center max-w-3xl px-4 leading-loose text-black mb-10 animate-fade-in-up delay-400 font-thin tracking-wide'>
          Hi, my name is <span className="text-black font-light">Gaurav Dhungana</span>. 
          I'm from Nepal — a <span className="text-black font-light">17-year-old full stack developer</span> 
          crafting slick, modern, and performant web apps with passion ✨
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10 animate-fade-in-up delay-600">
          <button
            onClick={scrollToProjects}
            className='group relative bg-black text-white font-medium py-4 px-8 rounded-2xl shadow-md shadow-gray-900/25 hover:shadow-gray-900/40 hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 tracking-wide'
          >
            <span className="relative z-10">View My Work</span>
          </button>
          
          <button
            onClick={scrollToContact}
            className='group relative border-2 border-black bg-transparent text-black font-medium py-4 px-8 rounded-2xl hover:bg-black hover:text-white hover:shadow-md hover:shadow-gray-900/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 tracking-wide'
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Floating Dots */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-black rounded-full animate-ping delay-1000"></div>
      <div className="absolute top-1/3 right-10 w-3 h-3 bg-black rounded-full animate-ping delay-1500"></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-black rounded-full animate-ping delay-2000"></div>
    </div>
  );
}

export default Home;