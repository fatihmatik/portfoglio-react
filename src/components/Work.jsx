import React from "react";

const Work = () => {
  return (
    <section className="py-8 px-4 sm:px-8 bg-gray-50 border border-gray-200 rounded-lg shadow-md m-1 dark:bg-neutral-800 dark:border-none">
      <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 dark:text-white">
        Work Experience
      </h3>

      <div className="space-y-8">
        <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out dark:bg-neutral-700 dark:border-none">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              DWH/BI Developer Intern
            </h4>
            <span className="text-sm font-medium text-blue-600 ">
              April 2024 - Present
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-100">
            I work as an Outsource to Garanti BBVA. The technology I use is
            mostly the Oracle Ecosystem, such as Oracle SQL Developer, ODIEE and
            Garanti's own software. I generally use SQL to complete my tasks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
