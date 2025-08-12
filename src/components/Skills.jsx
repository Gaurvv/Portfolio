import React from 'react';
import { TbBrandReact, TbBrandGithub, TbServer, TbBrandMongodb, TbPalette, TbBrandJavascript } from 'react-icons/tb';

function Skills() {
  const skillsData = [
    {
      id: 1,
      icon: <TbBrandReact className="text-black text-4xl" />,
      title: 'React',
      description: 'Building interactive user interfaces',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      id: 2,
      icon: <TbBrandGithub className="text-black text-4xl" />,
      title: 'Git/GitHub',
      description: 'Version control and collaboration',
      gradient: 'from-purple-400 to-purple-600',
    },
    {
      id: 3,
      icon: <TbServer className="text-black text-4xl" />,
      title: 'Express',
      description: 'Backend web application framework',
      gradient: 'from-green-400 to-green-600',
    },
    {
      id: 4,
      icon: <TbBrandMongodb className="text-black text-4xl" />,
      title: 'MongoDB',
      description: 'NoSQL database management',
      gradient: 'from-teal-400 to-teal-600',
    },
    {
      id: 5,
      icon: <TbPalette className="text-black text-4xl" />,
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      id: 6,
      icon: <TbBrandJavascript className="text-black text-4xl" />,
      title: 'JavaScript',
      description: 'Core web programming language',
      gradient: 'from-yellow-400 to-yellow-600',
    },
  ];

  return (
    <section className="relative min-h-screen pt-24 px-4 sm:px-6 lg:px-8 font-sans text-black overflow-hidden bg-transparent">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex justify-center mb-16">
          <h1 className="font-thin text-5xl sm:text-6xl md:text-7xl text-center tracking-widest uppercase">
            Skills & Expertise
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillsData.map(skill => (
            <div
              key={skill.id}
              className="group relative bg-white rounded-3xl p-8 shadow-md shadow-gray-300 transition-transform duration-300 hover:scale-105 hover:-translate-y-2"
            >
              <div
                className={`w-20 h-20 bg-gradient-to-br ${skill.gradient} rounded-3xl flex items-center justify-center mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                {skill.icon}
              </div>
              <h2 className="text-2xl font-thin mb-2 uppercase tracking-widest group-hover:text-black transition-colors duration-300">
                {skill.title}
              </h2>
              <p className="text-gray-700 text-base leading-relaxed font-light">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
