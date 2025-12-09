import Image from 'next/image';
import React from 'react';

type Project = {
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
  link: string;
  demo?: string; // Optional live demo
  image?: string; // Optional image URL
  display: boolean;
};

interface Props {
  projects: Project[];
}

const Projects = ({ projects }: Props) => {
  return ( 
    <div className="px-12 py-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="bg-[#1e293b] rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {project.display === true ? (
              // ✅ First Project – show full portfolio
              <> 
                {/* Project Image */}
                <div className="h-40 bg-gray-700">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.company}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                      No Image
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-4 space-y-2">
                  <h3 className="text-xl font-semibold">{project.company}</h3>
                  <p className="text-sm text-gray-300">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, techIdx) => (
                      <span 
                        key={techIdx} 
                        className="text-xs px-2 py-1 bg-gray-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-4 flex justify-between gap-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-2 rounded-md"
                      >
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gray-600 hover:bg-gray-700 text-white text-sm px-3 py-2 rounded-md"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </>
            ) : (
              // ❌ Other Projects – Coming Soon placeholder
              <div className="flex items-center justify-center h-64 text-gray-400 text-lg font-semibold"> 
                🚧 Coming Soon 🚧
              </div>
            )}
          </div>
        ))}
      </div> 
    </div>
  );
};

export default Projects;
