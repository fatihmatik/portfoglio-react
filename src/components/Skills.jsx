import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faReact,
  faPython,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";

const iconMapping = {
  Python: faPython,
  HTML5: faHtml5,
  CSS3: faCss3,
  JavaScript: faJsSquare,
  React: faReact,
};

const Skills = ({ skills }) => {
  return (
    <section className="p-6 bg-gray-50 border border-gray-200 rounded-lg ">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Technologies
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((tech, index) => (
          <div
            key={index}
            className="bg-white p-4 border border-gray-200 rounded-lg "
          >
            <p className="text-lg font-medium text-gray-900">
              <FontAwesomeIcon icon={iconMapping[tech]} className="mr-2" />
              {tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
