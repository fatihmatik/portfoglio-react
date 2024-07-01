import React from "react";

const Education = () => {
  return (
    <section className="py-8 px-4 sm:px-8 bg-gray-50 border border-gray-200 rounded-lg shadow-md m-1">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Education</h2>
      <div className="space-y-6">
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Yıldız Technical University
            </h3>
            <p className="text-gray-600 mb-1">
              Bachelor’s in Mathematical Engineering | 2020-2024
            </p>
          </div>
          <p className="text-gray-600 mb-1">GPA: 3.01/4.00</p>
          <p className="text-gray-700 mt-2">
            I wrote both my thesis and application project on machine learning
            algorithms.
          </p>
        </div>
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Università degli Studi di Bari Aldo Moro
            </h3>
            <p className="text-gray-600 mb-1">
              Erasmus in Matematica | 2022-2023
            </p>
          </div>
          <p className="text-gray-700 mt-2">
            I did my 3rd year of University with Erasmus+ Student Exchange in
            Italy, Bari for 2 semesters. I was able to see many different
            cultures and experience them together. I took courses from both the
            Mathematics Department and the Computer Science Department.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
