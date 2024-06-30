import React from "react";
import { projects } from "../projectsData";

const Projects = ({ title, date, description, link }) => (
  <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-4">{date}</p>
    <p className="text-gray-700 mb-4">{description}</p>
    {link && (
      <a
        href={link}
        className="text-blue-500 hover:text-blue-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub Pages
      </a>
    )}
  </div>
);

const ProjectsSection = () => (
  <section className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <Projects
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
