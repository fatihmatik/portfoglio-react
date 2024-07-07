import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faReact,
  faPython,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";
import tailwindIcon from "../assets/tailwindcss.svg";
import sqlIcon from "../assets/sql.svg";

const iconMapping = {
  Python: faPython,
  HTML5: faHtml5,
  CSS3: faCss3,
  JavaScript: faJsSquare,
  React: faReact,
  Tailwind: tailwindIcon,
  SQL: sqlIcon,
};

const Skills = ({ skills }) => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 border border-gray-200 rounded-lg shadow-md m-1 dark:bg-neutral-800 dark:border-none">
      <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 dark:text-white">
        Skills
      </h2>
      <div className="grid grid-cols-3 gap-8 md:gap-4">
        {skills.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center bg-white p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ease-in-out aspect-[11/8] md:aspect-auto transform hover:-translate-y-2 dark:bg-neutral-700 dark:border-neutral-600"
          >
            {typeof iconMapping[tech] === "string" ? (
              <img
                src={iconMapping[tech]}
                alt={`${tech} icon`}
                className="w-1/4 h-1/4 md:w-6 md:h-6 mb-2 dark:invert"
              />
            ) : (
              <FontAwesomeIcon
                icon={iconMapping[tech]}
                className="w-1/4 h-1/4 md:w-6 md:h-6 text-gray-700 dark:text-gray-200 mb-2"
              />
            )}
            <p className="text-lg md:text-xl lg:text-lg font-medium text-gray-900 dark:text-gray-100">
              {tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
