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

function App() {
  return (
    <div className="container mx-auto font-sans ">
      <Header {...cvData} />
      <About aboutText={cvData.about} />
      <Work />
      <Skills skills={cvData.skills} />
      <ProjectsSection />
      <Certifications certifications={certificationsData} />
      <Memberships />
      <Languages />
    </div>
  );
}

export default App;
