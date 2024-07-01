import React from "react";
import profilePicture from "../assets/ft-circular.png";
import tr from "../assets/tr_flag.png";
import en from "../assets/en_flag.png";
import it from "../assets/it_flag.png";

const Header = ({ name, title, phone, email, linkedin, github, kaggle }) => {
  const languages = [
    { lang: "Turkish", flag: tr },
    { lang: "English", flag: en },
    { lang: "Italian", flag: it },
  ];

  return (
    <header className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center md:justify-between">
      <div className="flex items-center mb-4 md:mb-0">
        <img
          src={profilePicture}
          alt={`${name} profile`}
          className="w-48 h-auto rounded-full border border-gray-300 ml-12"
        />
      </div>
      <div className="flex-grow text-right">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{name}</h1>
        <h2 className="text-2xl text-gray-600 mb-4">{title}</h2>
        <div className="flex flex-col md:flex-row md:justify-end gap-2 md:gap-6">
          <a
            href={`tel:${phone}`}
            className="text-blue-600 hover:text-blue-800"
          >
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
        <div className="flex justify-end mt-4">
          <span className="font-bold mr-2 text-blue-500">Languages:</span>
          {languages.map((lang, index) => (
            <p
              key={`${lang}_${index}`}
              className="mr-2 flex justify-center items-center font-medium"
            >
              <img src={lang.flag} alt="" className="w-5 h-5 mr-1" />
              {lang.lang}
            </p>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
