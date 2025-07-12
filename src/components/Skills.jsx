import React from 'react';
import { motion } from 'framer-motion';
import {
  TbBrandReact,
  TbBrandGithub,
  TbServer,
  TbBrandMongodb,
  TbPalette,
  TbBrandJavascript
} from 'react-icons/tb';

function Skills() {
  const skillsData = [
    {
      id: 1,
      icon: <TbBrandReact className="text-white text-3xl" />,
      title: 'React',
      description: 'Building interactive user interfaces',
      iconBgColor: 'bg-gradient-to-r from-blue-500 to-blue-700',
    },
    {
      id: 2,
      icon: <TbBrandGithub className="text-white text-3xl" />,
      title: 'Git/GitHub',
      description: 'Version control and collaboration',
      iconBgColor: 'bg-gradient-to-r from-purple-500 to-purple-700',
    },
    {
      id: 3,
      icon: <TbServer className="text-white text-3xl" />,
      title: 'Express',
      description: 'Backend web application framework',
      iconBgColor: 'bg-gradient-to-r from-green-500 to-green-700',
    },
    {
      id: 4,
      icon: <TbBrandMongodb className="text-white text-3xl" />,
      title: 'MongoDB',
      description: 'NoSQL database management',
      iconBgColor: 'bg-gradient-to-r from-teal-500 to-teal-700',
    },
    {
      id: 5,
      icon: <TbPalette className="text-white text-3xl" />,
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework',
      iconBgColor: 'bg-gradient-to-r from-orange-500 to-red-600',
    },
    {
      id: 6,
      icon: <TbBrandJavascript className="text-white text-3xl" />,
      title: 'JavaScript',
      description: 'Core web programming language',
      iconBgColor: 'bg-gradient-to-r from-yellow-500 to-yellow-700',
    },
  ];

  return (
    <div className="py-20 text-white font-inter px-4 sm:px-6 lg:px-8">
      <motion.div
        className="flex justify-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-purple-500 ">
          Skills & Expertise
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skillsData.map((skill) => (
          <motion.div
            key={skill.id}
            className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: skill.id * 0.15 }}
            viewport={{ once: false }}
          >
            <div className={`w-16 h-16 ${skill.iconBgColor} rounded-full flex items-center justify-center mb-4 shadow-md`}>
              {skill.icon}
            </div>
            <h2 className="text-xl font-semibold mb-2 text-gray-100">{skill.title}</h2>
            <p className="text-gray-400 text-sm">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;