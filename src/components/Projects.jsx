import React from "react";

function Projects() {
  const projectsData = [
    {
      id: 1,
      image: 'https://placehold.co/600x400/1e293b/64748b?text=E-Commerce+Website',
      title: 'E-Commerce Website',
      description: 'A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.',
      technologies: ['React', 'Tailwind CSS', 'MongoDB', 'Express'],
      link: 'https://ecom-gauravz.vercel.app/',
      gradient: 'from-emerald-400 to-cyan-500',
    },
    {
      id: 2,
      image: 'https://placehold.co/600x400/1e293b/64748b?text=Simple+Calculator',
      title: 'Simple Calculator',
      description: 'A simple calculator for performing mathematical operations with a clean, intuitive interface.',
      technologies: ['React', 'Tailwind CSS'],
      link: 'https://calculator-gauravz.vercel.app/',
      gradient: 'from-violet-400 to-purple-500',
    },
    {
      id: 3,
      image: 'https://placehold.co/600x400/1e293b/64748b?text=Todo+Website',
      title: 'Todo Website',
      description: 'A simple todo website where you can add your routine, notes and to-do list with real-time sync.',
      technologies: ['React', 'Supabase', 'Tailwind CSS'],
      link: 'https://todo-gaurav.vercel.app/',
      gradient: 'from-cyan-400 to-blue-500',
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-950 text-slate-100">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      {/* Section title */}
      <div className="flex justify-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-500 to-violet-500">
          Featured Projects
        </h1>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projectsData.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl overflow-hidden bg-slate-900/60 border border-slate-700/40 backdrop-blur-sm transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20"
          >
            {/* Card background hover effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Card content */}
            <div className="relative z-10">
              {/* Image */}
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Title, Description & Tech Stack */}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-slate-900 shadow-md`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Glow Effect on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/10 to-violet-400/10 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
