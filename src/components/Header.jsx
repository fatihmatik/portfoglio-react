import React from "react";

const Header = ({ name, title, phone, email, linkedin, github, kaggle }) => {
  return (
    <header className="bg-gray-100 p-8 text-center rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">{name}</h1>
      <h2 className="text-2xl text-gray-600 mb-4">{title}</h2>
      <div className="flex flex-col md:flex-row md:justify-center gap-2 md:gap-6">
        <a href={`tel:${phone}`} className="text-blue-600 hover:text-blue-800">
          {phone}
        </a>
        <a
          href={`mailto:${email}`}
          className="text-blue-600 hover:text-blue-800"
        >
          {email}
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          LinkedIn
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          GitHub
        </a>
        <a
          href={kaggle}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Kaggle
        </a>
      </div>
    </header>
  );
};

export default Header;
