import React from "react";

const About = ({ aboutText, highlightText }) => {
  return (
    <section className="py-8 px-4 sm:px-8 bg-gray-50 border border-gray-200 rounded-lg shadow-md m-1">
      <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-6">
        About Me
      </h3>
      <p className="text-gray-700 leading-relaxed mb-6 bg-white p-4 pb-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out ">
        {aboutText}

        <span className="text-blue-600 leading-relaxed">{highlightText}</span>
      </p>
    </section>
  );
};

export default About;
