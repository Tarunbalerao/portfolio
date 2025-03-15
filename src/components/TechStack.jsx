import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiJava } from "react-icons/di";
import { SiTailwindcss, SiExpress, SiDotnet, SiMysql, SiPostgresql } from "react-icons/si";

const skills = [
  { name: "Java", icon: <DiJava className="text-6xl" /> },
  { name: "HTML", icon: <AiFillHtml5 className="text-6xl" /> },
  { name: "CSS", icon: <DiCss3 className="text-6xl" /> },
  { name: "JavaScript", icon: <DiJavascript1 className="text-6xl" /> },
  { name: "Python", icon: <DiPython className="text-6xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-6xl" /> },
  { name: "React", icon: <DiReact className="text-6xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-6xl" /> },
  { name: "ASP .Net Core", icon: <SiDotnet className="text-6xl" /> },
  { name: "MongoDB", icon: <DiMongodb className="text-6xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-6xl" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-6xl" /> },
];

const Techstack = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
          My <span className="text-purple-400">Professional Skillset</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-700"
            >
              {skill.icon}
              <span className="mt-4 text-lg font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Techstack;