import React from "react";

const About = ({ aboutText, bulletPoints }) => {
  return (
    <section className="py-12 px-16 ">
      <h3 className="text-3xl font-bold text-gray-800 mb-6">About Me</h3>
      <p className="text-gray-700 leading-relaxed mb-6">{aboutText}</p>
      <h4 className="text-xl font-semibold text-gray-800 mb-4">
        My Area of Interests
      </h4>
      <div className="flex flex-col pl-4 font-bold">
        {bulletPoints.map((point, index) => (
          <p key={`${point}_index`} className="text-blue-600">
            {point}
          </p>
        ))}
      </div>
    </section>
  );
};

export default About;
