import React from 'react';
import { TbBracketsAngle, TbPalette, TbServer, TbWorld } from 'react-icons/tb';
import { motion } from 'framer-motion';

function Skills() {
  const skillsData = [
    {
      id: 1,
      icon: <TbBracketsAngle className="text-white text-3xl" />,
      title: 'Frontend Development',
      percentage: 90,
      iconBgColor: 'bg-gradient-to-r from-blue-500 to-blue-700',
      progressBarColor: 'bg-gradient-to-r from-blue-400 to-blue-600',
    },
    {
      id: 2,
      icon: <TbPalette className="text-white text-3xl" />,
      title: 'UI/UX Design',
      percentage: 85,
      iconBgColor: 'bg-gradient-to-r from-purple-500 to-purple-700',
      progressBarColor: 'bg-gradient-to-r from-purple-400 to-purple-600',
    },
    {
      id: 3,
      icon: <TbServer className="text-white text-3xl" />,
      title: 'Backend Development',
      percentage: 80,
      iconBgColor: 'bg-gradient-to-r from-green-500 to-green-700',
      progressBarColor: 'bg-gradient-to-r from-green-400 to-green-600',
    },
    {
      id: 4,
      icon: <TbWorld className="text-white text-3xl" />,
      title: 'Web Technologies',
      percentage: 95,
      iconBgColor: 'bg-gradient-to-r from-orange-500 to-red-600',
      progressBarColor: 'bg-gradient-to-r from-orange-400 to-red-500',
    },
  ];

  return (
    <div className="py-20  text-white font-inter px-4 sm:px-6 lg:px-8">
      <motion.div
        className="flex justify-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text  bg-gradient-to-r from-cyan-700 to-purple-500 ">
          Skills & Expertise
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
            <h2 className="text-xl font-semibold mb-3 text-gray-100">{skill.title}</h2>
            <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
              <div className={`${skill.progressBarColor} h-2.5 rounded-full`} style={{ width: `${skill.percentage}%` }}></div>
            </div>
            <p className="text-gray-300 text-sm">{skill.percentage}%</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
