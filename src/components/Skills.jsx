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
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 border border-gray-200 rounded-lg shadow-md  mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {skills.map((tech, index) => (
          <div
            key={index}
            className="flex items-center bg-white p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out"
          >
            {typeof iconMapping[tech] === "string" ? (
              <img
                src={iconMapping[tech]}
                alt={`${tech} icon`}
                className="mr-4 w-8 h-8"
              />
            ) : (
              <FontAwesomeIcon
                icon={iconMapping[tech]}
                className="mr-4 w-8 h-8 text-gray-700"
              />
            )}
            <p className="text-lg font-medium text-gray-900">{tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
