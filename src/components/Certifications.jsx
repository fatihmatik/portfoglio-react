import React from "react";

const Certifications = ({ certifications }) => {
  return (
    <section className="py-8 px-4 md:px-8 bg-gray-50 border border-gray-200 rounded-lg shadow-md m-1 dark:bg-neutral-800 dark:border-none">
      <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 dark:text-white">
        Certifications
      </h2>
      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="p-6 border border-gray-300 rounded-lg shadow-sm bg-white hover:shadow-lg transition duration-300 ease-in-out dark:bg-neutral-700 dark:border-none"
          >
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500"
            >
              {cert.title}
            </a>
            <p className="text-sm text-gray-500 mb-2 dark:text-gray-200">
              {cert.organization} | {cert.date}
            </p>
            <p className="text-gray-700 dark:text-gray-100">
              {cert.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
