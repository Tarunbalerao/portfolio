import React from "react";
import { FaJava, FaPython, FaReact } from "react-icons/fa";
import { SiPostgresql, SiTailwindcss } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Realpage Inc",
    dates: "May 2024 - Present",
    description: [
      "Developing the Linux DBA Dashboard that provides real-time details of Server Inventory (On-Premise and Cloud).",
      "Monitoring Backup Status and Database Health to enhance system management capabilities.",
      "Integrated a chatbot that retrieves and presents dashboard information based on user queries.",
      "Added light mode and dark mode toggle for improved user experience.",
      "Added widgets to provide an overview of the vulnerability status, disaster recovery status, backup status, and daily stats.",
    ],
    techStack: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Express.js", icon: <AiFillGithub /> }, // Placeholder icon
    ],
  },
  {
    title: "Data Engineer Intern",
    company: "Asset10 Software Private Limited",
    dates: "March 2024 - May 2024",
    description: [
      "Developed the data connector to seamlessly transfer data from ZohoBooks to Bluecopa:",
      "  - Enhanced Data Integration: Ensured seamless data flow between ZohoBooks and Bluecopa, enabling real-time updates and reducing manual data entry.",
      "  - Improved Data Accuracy: Implemented robust error handling and validation mechanisms to maintain data integrity and accuracy during the transfer process.",
      "Added Java functionalities for editing and deleting messages in the website’s chat system.",
    ],
    techStack: [
      { name: "Java", icon: <FaJava /> },
      { name: "BigQuery", icon: <AiFillGithub /> }, // Placeholder icon
      { name: "Postman", icon: <AiFillGithub /> }, // Placeholder icon
      { name: "Python", icon: <FaPython /> },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
          My <span className="text-purple-400">Experience</span>
        </h2>

        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-700 flex-1">
              <h3 className="text-2xl font-semibold">{exp.title}</h3>
              <h4 className="text-lg text-gray-400">{exp.company}</h4>
              <p className="text-sm text-gray-500">{exp.dates}</p>
              <ul className="mt-2 list-disc list-inside">
                {exp.description.map((point, idx) => (
                  <li key={idx} className="mt-1">{point}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap justify-center space-x-4">
                {exp.techStack.map((tech, idx) => (
                  <div key={idx} className="flex items-center mb-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="ml-2">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;