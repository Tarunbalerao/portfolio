import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaHome, FaUser , FaTools, FaBriefcase, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 w-full top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div className="hidden md:flex md:ml-auto">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#home" className="flex items-center hover:text-gray-200 transition duration-300">
                  <FaHome className="mr-1" /> Home
                </a>
              </li>
              <li>
                <a href="#about" className="flex items-center hover:text-gray-200 transition duration-300">
                  <FaUser  className="mr-1" /> About
                </a>
              </li>
              <li>
                <a href="#skills" className="flex items-center hover:text-gray-200 transition duration-300">
                  <FaTools className="mr-1" /> Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="flex items-center hover:text-gray-200 transition duration-300">
                  <FaBriefcase className="mr-1" /> Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="flex items-center hover:text-gray-200 transition duration-300">
                  <FaFolderOpen className="mr-1" /> Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center hover:text-gray-200 transition duration-300">
                  <FaEnvelope className="mr-1" /> Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-gradient-to-r from-blue-500 to-purple-600 p-4 top-full left-0 w-full shadow-lg z-50">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <a href="#home" className="flex items-center hover:text-gray-200 transition duration-300 text-xl" onClick={toggleMenu}>
                <FaHome className="mr-1" /> Home
              </a>
            </li>
            <li>
              <a href="#about" className="flex items-center hover:text-gray-200 transition duration-300 text-xl" onClick={toggleMenu}>
                <FaUser  className="mr-1" /> About
              </a>
            </li>
            <li>
              <a href="#skills" className="flex items-center hover:text-gray-200 transition duration-300 text-xl" onClick={toggleMenu}>
                <FaTools className="mr-1" /> Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="flex items-center hover:text-gray-200 transition duration-300 text-xl" onClick={toggleMenu}>
                <FaBriefcase className="mr-1" /> Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="flex items-center hover:text-gray-200 transition duration-300 text-xl" onClick={toggleMenu}>
                <FaFolderOpen className="mr-1" /> Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="flex items-center hover:text-gray-200 transition duration-300 text-xl" onClick={toggleMenu}>
                <FaEnvelope className="mr-1" /> Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;