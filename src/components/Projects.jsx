import React from "react";
import { projects } from "../projectsData";

const ProjectCard = ({ title, date, description, link }) => (
  <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-4">{date}</p>
    <p className="text-gray-700 mb-4">{description}</p>
    {link && (
      <a
        href={link}
        className="text-blue-500 hover:text-blue-700 font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub Pages
      </a>
    )}
  </div>
);

const ProjectsSection = () => (
  <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 border border-gray-200 rounded-lg shadow-md  m-1">
    <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-8">
      Projects
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          date={project.date}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
