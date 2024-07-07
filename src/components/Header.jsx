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
    <header className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col items-center md:flex-row md:items-center md:justify-between dark:bg-neutral-800">
      <div className="flex items-center mb-4 md:mb-0 relative lg:pl-16">
        <img
          src={profilePicture}
          alt={`${name} profile`}
          className="w-48 h-auto rounded-full border-2 border-gray-300 dark:border-neutral-700 "
        />
      </div>
      <div className="flex flex-col items-center md:items-end md:pl-8">
        <h1 className="text-base sm:text-sm md:text-lg lg:text-xl xl:text-3xl font-bold text-gray-800 mb-2 dark:text-gray-100 text-center md:text-left">
          {name}
        </h1>
        <h2 className="text-base sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-4 dark:text-gray-400 text-center md:text-left">
          {title}
        </h2>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4 text-center md:text-left">
          <a
            href={`tel:${phone}`}
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
          >
            {phone}
          </a>
          <a
            href={`mailto:${email}`}
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
          >
            {email}
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
          >
            LinkedIn
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
          >
            GitHub
          </a>
          <a
            href={kaggle}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
          >
            Kaggle
          </a>
        </div>
        <div className="flex items-center md:items-start mt-8 gap-4">
          <span className="font-bold text-blue-500 dark:text-blue-400 mb-2 text-center hidden md:block md:text-left">
            Languages:
          </span>
          <div className="flex gap-2 sm:flex-row sm:gap-4">
            {languages.map((lang, index) => (
              <div key={`${lang.lang}_${index}`} className="flex items-center">
                <img src={lang.flag} alt="" className="w-5 h-5 mr-2" />
                <p className="text-sm sm:text-base font-medium dark:text-gray-300">
                  {lang.lang}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
