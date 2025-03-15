import React from 'react';

const ExperienceCard = ({ company, position, duration, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 m-4 w-80">
      <h3 className="text-xl font-bold">{company}</h3>
      <h4 className="text-lg text-gray-600">{position}</h4>
      <p className="text-gray-500">{duration}</p>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
};

export default ExperienceCard;