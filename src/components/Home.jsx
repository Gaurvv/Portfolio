import React from 'react';
import { TbBracketsAngle } from 'react-icons/tb';

function Home({ scrollToProjects, scrollToContact }) {
  return (
    <div className='text-slate-100 min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 px-4 sm:px-6'>
      
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-ping delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-8 group">
          <div className="relative">
            <TbBracketsAngle className='bg-gradient-to-br from-emerald-400 via-cyan-500 to-violet-500 text-slate-900 w-24 h-24 rounded-3xl flex items-center justify-center text-5xl shadow-2xl shadow-emerald-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12' />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-cyan-500 to-violet-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Headings */}
        <h1 className='font-bold text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-emerald-400 via-cyan-500 to-violet-500 bg-clip-text text-transparent text-center mb-2 animate-fade-in-up'>
          Hello I'm 
        </h1>

        <h2 className='font-bold text-5xl md:text-6xl lg:text-7xl text-center text-emerald-400 mb-6 animate-fade-in-up delay-200'>
          GAURAV
        </h2>

        {/* About Text */}
        <p className='text-lg md:text-xl text-center max-w-3xl px-4 leading-relaxed text-slate-300 mb-10 animate-fade-in-up delay-400'>
          Hi, my name is <span className="text-emerald-400 font-semibold">Gaurav Dhungana</span>. 
          I'm from Nepal — a <span className="text-cyan-400 font-semibold">17-year-old full stack developer</span> 
          crafting slick, modern, and performant web apps with passion ✨
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10 animate-fade-in-up delay-600">
          <button
            onClick={scrollToProjects}
            className='group relative bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 text-slate-900 font-semibold py-4 px-8 rounded-2xl shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1'
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-cyan-600 to-violet-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          
          <button
            onClick={scrollToContact}
            className='group relative border-2 border-emerald-500/50 bg-slate-900/50 backdrop-blur-sm text-emerald-400 font-semibold py-4 px-8 rounded-2xl hover:bg-emerald-500 hover:text-slate-900 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1'
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Floating Dots */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute top-1/3 right-10 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-1500"></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-violet-400 rounded-full animate-ping delay-2000"></div>
    </div>
  );
}

export default Home;
