import React from "react";
import { FaJava, FaPython } from "react-icons/fa";
import { VscGraphScatter } from "react-icons/vsc"; // Matplotlib icon
import { IoBarChartSharp } from "react-icons/io5"; // Seaborn icon
import { FaDatabase } from "react-icons/fa"; // MySQL icon

// Import images
import hotelImage from '../Assets/hotel1.png'; // Adjust the path as necessary
import whatsappImage from '../Assets/whatsapp1.png'; // Adjust the path as necessary
import analysisImage from '../Assets/analysis.png'; // Adjust the path as necessary

const projects = [
  {
    title: "Hotel Supervision System",
    description: [
      "Developed a Windows-based application using Java AWT and MySQL to create a comprehensive hotel supervision system.",
      "The system efficiently manages hotel data including reservations, room maintenance, and customer services.",
    ],
    techStack: [
      { name: "Java AWT", icon: <FaJava /> },
      { name: "MySQL", icon: <FaDatabase /> },
    ],
    image: hotelImage, // Add the hotel image
  },
  {
    title: "WhatsApp Chat Mining",
    description: [
      "Developed a data analysis tool with a user-friendly Streamlit frontend for extracting insights from WhatsApp chats.",
      "This project includes data extraction, providing statistics, and visualizations using Matplotlib and Seaborn libraries.",
    ],
    techStack: [
      { name: "Streamlit", icon: <FaPython /> }, // Using FaPython for Streamlit
      { name: "Matplotlib", icon: <VscGraphScatter /> }, // Using VscGraphScatter for Matplotlib
      { name: "Seaborn", icon: <IoBarChartSharp /> }, // Using IoBarChartSharp for Seaborn
    ],
    images: [whatsappImage, analysisImage], // Add WhatsApp and analysis images
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
          My <span className="text-purple-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              {project.image && (
                <div className="flex justify-center mb-4">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded" />
                </div>
              )}
              {project.images && (
                <div className="flex justify-center space-x-4 mb-4">
                  {project.images.map((img, idx) => (
                    <img key={idx} src={img} alt={`Image for ${project.title}`} className="h-32 w-auto object-cover rounded" />
                  ))}
                </div>
              )}
              <ul className="list-disc list-inside mb-4">
                {project.description.map((desc, idx) => (
                  <li key={idx} className="mt-1">{desc}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap justify-center space-x-4 mb-4">
                {project.techStack.map((tech, idx) => (
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

export default Projects;