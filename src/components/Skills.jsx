import React from 'react';
import { TbBrandReact, TbBrandGithub, TbServer, TbBrandMongodb, TbPalette, TbBrandJavascript } from 'react-icons/tb';

function Skills() {
  const skillsData = [
    {
      id: 1,
      icon: <TbBrandReact className="text-slate-900 text-3xl" />,
      title: 'React',
      description: 'Building interactive user interfaces',
      gradient: 'from-blue-400 to-blue-600',
      delay: 0.1
    },
    {
      id: 2,
      icon: <TbBrandGithub className="text-slate-900 text-3xl" />,
      title: 'Git/GitHub',
      description: 'Version control and collaboration',
      gradient: 'from-purple-400 to-purple-600',
      delay: 0.2
    },
    {
      id: 3,
      icon: <TbServer className="text-slate-900 text-3xl" />,
      title: 'Express',
      description: 'Backend web application framework',
      gradient: 'from-green-400 to-green-600',
      delay: 0.3
    },
    {
      id: 4,
      icon: <TbBrandMongodb className="text-slate-900 text-3xl" />,
      title: 'MongoDB',
      description: 'NoSQL database management',
      gradient: 'from-teal-400 to-teal-600',
      delay: 0.4
    },
    {
      id: 5,
      icon: <TbPalette className="text-slate-900 text-3xl" />,
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework',
      gradient: 'from-orange-400 to-red-500',
      delay: 0.5
    },
    {
      id: 6,
      icon: <TbBrandJavascript className="text-slate-900 text-3xl" />,
      title: 'JavaScript',
      description: 'Core web programming language',
      gradient: 'from-yellow-400 to-yellow-600',
      delay: 0.6
    },
  ];

  return (
    <div className="py-20 text-slate-100 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent"></div>

      <div className="relative z-10">
        <div className="flex justify-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-500 to-violet-500">
            Skills & Expertise
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="group relative bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
              style={{ animationDelay: `${skill.delay}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-violet-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${skill.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                  {skill.icon}
                </div>
                <h2 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-emerald-400 transition-colors duration-300">
                  {skill.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">{skill.description}</p>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/20 to-violet-400/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
