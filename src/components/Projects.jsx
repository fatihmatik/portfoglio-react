import React from "react";
import { projects } from "../projectsData";

const ProjectCard = ({ title, date, description, link }) => (
  <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out dark:bg-neutral-700 dark:border-neutral-700 hover:-translate-y-2">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <h3 className="text-xl font-semibold text-gray-900 mb-2 dark:text-white">
        {title}
      </h3>
      <p className="text-sm text-gray-600 mb-4 dark:text-blue-300">{date}</p>
      <p className="text-gray-700 mb-4 dark:text-gray-100">{description}</p>
      {link && (
        <p className="text-green-400 hover:text-green-500 font-medium dark:text-green-400 dark:hover:text-green-500">
          Visit the Site!
        </p>
      )}
    </a>
  </div>
);

const ProjectsSection = () => (
  <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 border border-gray-200 rounded-lg shadow-md  m-1 dark:bg-neutral-800 dark:border-none">
    <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-8 dark:text-white">
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
