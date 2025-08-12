import React from "react";

function Projects() {
  const projectsData = [
    {
      id: 1,
      image: 'ecom.png',
      title: 'E-Commerce Website',
      description: 'A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.',
      technologies: ['React', 'Tailwind CSS', 'MongoDB', 'Express'],
      link: 'https://e-com-gaauravz.vercel.app/',
    },
    {
      id: 2,
      image: 'Cal.png',
      title: 'Simple Calculator',
      description: 'A simple calculator for performing mathematical operations with a clean, intuitive interface.',
      technologies: ['React', 'Tailwind CSS'],
      link: 'https://calculator-gauravz.vercel.app/',
    },
    {
      id: 3,
      image: 'todo.png',
      title: 'Todo Website',
      description: 'A simple todo website where you can add your routine, notes and to-do list with real-time sync.',
      technologies: ['React', 'Supabase', 'Tailwind CSS'],
      link: 'https://todo-gaurav.vercel.app/',
    },
  ];

  return (
    <section className="relative min-h-screen pt-24 px-4 sm:px-6 lg:px-8 font-sans text-black overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex justify-center mb-16">
          <h1 className="font-thin text-5xl sm:text-6xl md:text-7xl text-center tracking-widest uppercase">
            Featured Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h2 className="text-2xl font-thin mb-3 uppercase tracking-widest group-hover:text-emerald-500 transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="text-gray-700 text-base font-light mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-light px-3 py-1 rounded-full bg-gray-200 text-gray-800 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
