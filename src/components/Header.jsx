// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav>
        <ul className="flex space-x-6">
        <li>
            <a href="#home" className="hover:text-gray-200 transition duration-300">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-200 transition duration-300">About</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-200 transition duration-300">Skills</a>
          </li>
          <li>
            <a href="#experience" className="hover:text-gray-200 transition duration-300">Experience</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-200 transition duration-300">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-200 transition duration-300">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;