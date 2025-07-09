import React from 'react';
import { MdOutlineMail, MdOutlineLocationOn } from 'react-icons/md';
import { FaGithub, FaFacebookF } from "react-icons/fa";
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className="min-h-screen text-white font-inter p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center"
    >
      <motion.div
        className="flex justify-center mt-10 mb-6"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-purple-500">
          Let's Work Together
        </h1>
      </motion.div>

      <motion.p
        className="text-lg text-center max-w-2xl px-4 leading-relaxed text-gray-300 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: false }}
      >
        Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl mx-auto mb-12">
        {[
          {
            icon: <MdOutlineMail className="text-white text-3xl" />, title: 'Email', content: 'GauravDhungana294@gmail.com', gradient: 'from-blue-500 to-blue-700'
          },
          {
            icon: <FaGithub className="text-white text-3xl" />, title: 'GitHub', content: 'Gaurvv', link: 'https://github.com/Gaurvv', gradient: 'from-purple-500 to-blue-700'
          },
          {
            icon: <FaFacebookF className="text-white text-3xl" />, title: 'Facebook', content: 'Gaurav Dhungana', link: 'https://www.facebook.com/gaurav.dhungana.18', gradient: 'from-blue-500 to-cyan-700'
          },
          {
            icon: <MdOutlineLocationOn className="text-white text-3xl" />, title: 'Location', content: 'Nepal', gradient: 'from-purple-500 to-purple-700'
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: false }}
          >
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700 no-underline"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mb-4 shadow-md`}>
                  {item.icon}
                </div>
                <h2 className="text-xl font-semibold mb-2 text-gray-100">{item.title}</h2>
                <p className="text-gray-300 text-sm">{item.content}</p>
              </a>
            ) : (
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700">
                <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mb-4 shadow-md`}>
                  {item.icon}
                </div>
                <h2 className="text-xl font-semibold mb-2 text-gray-100">{item.title}</h2>
                <p className="text-gray-300 text-sm">{item.content}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.a
        href="https://github.com/Gaurvv"
        className='bg-gradient-to-r from-cyan-700 to-purple-500 text-white font-semibold py-3 px-8 rounded-md shadow-xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 transform hover:scale-105 mb-20'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: false }}
      >
        View All Projects
      </motion.a>

      <footer className="text-gray-400 text-sm text-center mt-auto pb-4">
        &copy; 2024 Portfolio. Crafted with passion and modern technologies.
      </footer>
    </motion.div>
  );
}

export default Contact;
    