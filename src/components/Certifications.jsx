import React from "react";

const Certifications = ({ certifications }) => {
  return (
    <section className="py-8 px-4 md:px-8 bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Certifications</h2>
      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="p-6 border border-gray-300 rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-600 hover:text-blue-800"
            >
              {cert.title}
            </a>
            <p className="text-sm text-gray-500 mb-2">
              {cert.organization} | {cert.date}
            </p>
            <p className="text-gray-700">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
