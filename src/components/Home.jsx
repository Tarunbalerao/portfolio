import React, { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import homeImage from "../Assets/home1.png"; // Adjust the path as necessary

const roles = [
  "Software Developer",
  "DSA Enthusiast",
  "MERN Stack Developer"
];

const Home = () => {
  const [visibleRole, setVisibleRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (roleIndex < roles.length) {
      if (charIndex < roles[roleIndex].length) {
        setTimeout(() => {
          setVisibleRole((prev) => prev + roles[roleIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 100); // Typing speed
      } else {
        setTimeout(() => {
          setVisibleRole("");
          setCharIndex(0);
          setRoleIndex(roleIndex + 1);
        }, 1000); // Delay before next role
      }
    } else {
      setRoleIndex(0); // Reset to the first role
    }
  }, [charIndex, roleIndex]);

  return (
    <section id="home" className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-8">
              Hi There!{" "}
              <span className="text-purple-400">👋🏻</span>
            </h2>

            <h1 className="text-4xl font-bold mb-4">
              I'M <strong className="main-name">BALERAO TARUN KUMAR</strong>
            </h1>

            <h2 className="text-3xl font-bold mb-4">
              <span className="text-purple-400">{visibleRole}</span>
            </h2>

            {/* Social Links */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
              <div className="flex space-x-8">
                <a href="https://github.com/Tarunbalerao" target="_blank" rel="noreferrer" 
                   className="text-3xl hover:text-purple-400 transition-colors">
                  <AiFillGithub />
                </a>
                <a href="https://www.linkedin.com/in/tarun-kumar-balerao-b88382226/" target="_blank" rel="noreferrer" 
                   className="text-3xl hover:text-purple-400 transition-colors">
                  <AiFillLinkedin />
                </a>
                <a href="https://www.instagram.com/tarun.balerao/" target="_blank" rel="noreferrer" 
                   className="text-3xl hover:text-purple-400 transition-colors">
                  <FaInstagram />
                </a>
                <a href="https://x.com/TarunBalerao" target="_blank" rel="noreferrer" 
                   className="text-3xl hover:text-purple-400 transition-colors">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <div className="overflow-hidden rounded-lg shadow-2xl transition-transform transform hover:scale-105">
              <img 
                src={homeImage} 
                alt="Home Illustration" 
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;