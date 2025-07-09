import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const projectsData = [
    {
      id: 1,
      image: 'https://placehold.co/600x400/1a202c/e2e8f0?text=Code+Image',
      title: 'E-Commerce Website',
      description: 'A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      id: 2,
      image: 'https://placehold.co/600x400/1a202c/e2e8f0?text=Laptop+Image',
      title: 'Simple Calculator',
      description: 'Collaborative task management with real-time updates, file sharing, and team communication.',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
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
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text  bg-gradient-to-r from-cyan-700 to-purple-500">
          Featured Projects
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-xl shadow-lg flex flex-col lg:flex-row overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.15 }}
            viewport={{ once: false }}
          >
            <div className="lg:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover lg:h-full rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/1a202c/e2e8f0?text=Image+Error'; }}
              />
            </div>
            <div className="lg:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-100">{project.title}</h2>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-cyan-500 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
