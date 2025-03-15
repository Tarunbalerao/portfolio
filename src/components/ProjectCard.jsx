
import React from 'react';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 m-4 w-80">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <a href={link} className="text-blue-500 hover:underline">View Project</a>
    </div>
  );
};

export default ProjectCard;