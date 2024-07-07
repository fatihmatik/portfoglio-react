import React from "react";

const About = ({ aboutText, highlightText }) => {
  return (
    <section className="py-8 px-4 sm:px-8 bg-gray-50 border border-gray-200 rounded-lg shadow-md m-1  dark:bg-neutral-800 dark:border-none">
      <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 dark:text-white">
        About Me
      </h3>
      <p className="text-gray-700 leading-relaxed mb-6 bg-white p-4 pb-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out dark:bg-neutral-700 dark:text-white dark:border-none">
        {aboutText}

        <span className="text-blue-600 leading-relaxed dark:text-blue-400">
          {highlightText}
        </span>
      </p>
    </section>
  );
};

export default About;
