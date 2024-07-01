import React from "react";
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
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-[128px] font-sans">
      <Header {...cvData} />
      <div className="grid grid-cols-2 mt-8">
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
    </div>
  );
}

export default App;
