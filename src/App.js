import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import { cvData } from "./cvData";
import { certificationsData } from "./certificationsData";
import Skills from "./components/Skills";
import ProjectsSection from "./components/Projects";
import Certifications from "./components/Certifications";
import Memberships from "./components/Memberships";
import Education from "./components/Education";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-200 ease-in-out ${
        darkMode ? "dark bg-neutral-950" : "bg-white"
      }`}
    >
      <button
        className="absolute top-4 right-4 bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-white border-2 border-blue-300 dark:border-blue-400 rounded-md py-2 px-4 font-semibold transition-colors duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-neutral-700"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light" : "Dark"}
      </button>

      <main className="flex-grow container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-[128px] font-sans">
        <Header {...cvData} />

        <div className="mt-8 flex flex-col lg:grid lg:grid-cols-2">
          <About
            aboutText={cvData.aboutText}
            highlightText={cvData.highlightText}
          />
          <Work />
          <Education />
          <Skills skills={cvData.skills} />
        </div>
        <ProjectsSection />
        <Certifications certifications={certificationsData} />
        <Memberships />
      </main>
    </div>
  );
}

export default App;
