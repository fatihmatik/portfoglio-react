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
import Languages from "./components/Languages";
import Education from "./components/Education";

function App() {
  return (
    <div className="container mx-auto px-16 sm:px-4 font-sans">
      <Header {...cvData} />
      <About aboutText={cvData.about} bulletPoints={cvData.bulletPoints} />
      <Work />
      <Education />
      <Skills skills={cvData.skills} />
      <ProjectsSection />
      <Certifications certifications={certificationsData} />
      <Memberships />
      <Languages />
    </div>
  );
}

export default App;
