import React from "react";

const membershipsAndEvents = [
  {
    title: "YTU Blockchain - Member",
    date: "2021-2022",
    description:
      "I developed myself in the blockchain area and learnt smart contract programming with Solidity.",
  },
  {
    title: "Erasmus+ “Youth Exchange” Project - “Equality in Progress”",
    date: "November 2022",
    description:
      "When I was in Erasmus in Italy I did a Youth Exchange project, where we went to Alezio, South Italy. It was a multi-cultural and very pleasant experience.",
  },
];

const Memberships = () => {
  return (
    <section className="py-8 px-4 sm:px-8 bg-gray-50 border border-gray-200 rounded-lg shadow-md m-1 dark:bg-neutral-800 dark:border-none">
      <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 dark:text-white">
        Memberships & Events
      </h2>
      <div className="space-y-6">
        {membershipsAndEvents.map((item, index) => (
          <div
            key={index}
            className="p-6 border border-gray-300 rounded-lg shadow-sm bg-white hover:shadow-md transition duration-300 ease-in-out dark:bg-neutral-700 dark:border-none"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 dark:text-blue-400 dark:hover:text-blue-500">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2 dark:text-gray-200">
              {item.date}
            </p>
            <p className="text-gray-700 dark:text-gray-100">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Memberships;
