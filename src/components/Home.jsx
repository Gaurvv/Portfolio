import React from 'react';
import { TbBracketsAngle } from 'react-icons/tb';
import { motion } from 'framer-motion';

function Home({ scrollToProjects, scrollToContact }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className='text-gray-100 min-h-screen flex flex-col items-center justify-center'
    >
      <motion.div
        className="flex justify-center mb-8"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
        viewport={{ once: false }}
      >
        <TbBracketsAngle className='bg-gradient-to-r from-cyan-700 to-purple-500 text-gray-100 w-24 h-24 rounded-full flex items-center justify-center text-5xl shadow-lg shadow-cyan-500/50' />
      </motion.div>

      <motion.h1
        className='font-bold text-7xl bg-gradient-to-r from-cyan-700 to-purple-500 bg-clip-text text-transparent text-center mb-2'
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: false }}
      >
        Hello Visitors
      </motion.h1>

      <motion.h1
        className='font-bold text-7xl text-center text-cyan-500 shadow-cyan-500/50 mb-6'
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: false }}
      >
        Welcome
      </motion.h1>

      <motion.p
        className='text-xl text-center max-w-2xl px-4 leading-relaxed text-gray-300'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: false }}
      >
        Hi, my name is Gaurav Dhungana. I'm from Nepal, a 17 years old full stack dev crafting slick, modern, and performant web apps 🛏️
      </motion.p>

      <motion.div
        className="flex justify-center gap-8 mt-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: false }}
      >
        <button
          onClick={scrollToProjects}
          className='bg-gradient-to-r from-cyan-700 to-purple-500 text-gray-100 font-semibold py-3 px-8 rounded-md shadow-xl shadow-cyan-500/70 hover:shadow-cyan-500/90 transition-all duration-300 transform hover:scale-105'
        >
          View My Work
        </button>
        <button
          onClick={scrollToContact}
          className='border-2 border-cyan-500 text-cyan-500 font-semibold py-3 px-8 rounded-md hover:bg-cyan-500 hover:text-gray-900 hover:shadow-xl hover:shadow-cyan-500/70 transition-all duration-300 transform hover:scale-105'
        >
          Get In Touch
        </button>
      </motion.div>
    </motion.div>
  );
}

export default Home;