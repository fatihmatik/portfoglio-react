import React from "react";

const About = ({ aboutText }) => {
  return (
    <section className="py-8 px-16">
      <h3 className="text-2xl font-semibold mb-4">About Me</h3>
      <p className="text-gray-700">{aboutText}</p>
    </section>
  );
};

export default About;
