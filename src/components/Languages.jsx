import React from "react";

const languages = [
  {
    language: "Turkish",
    level: "Native Language",
  },
  {
    language: "English",
    level: "C1, Fluent",
  },
  {
    language: "Italian",
    level: "A2, I can hold daily conversations.",
  },
];

const Languages = () => {
  return (
    <section className="py-8 px-4 md:px-8 bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Languages</h2>
      <ul className="space-y-4">
        {languages.map((item, index) => (
          <li
            key={index}
            className="p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              {item.language}
            </h3>
            <p className="text-gray-700">{item.level}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Languages;
