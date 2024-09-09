import React from "react";
import {
  FaCss3,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaPython,
  FaGit,
  FaGithub,
  FaFigma,
  FaJs,
  FaDesktop,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiBootstrap,
} from "react-icons/si";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-white">
        Skills
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <div className="flex flex-wrap justify-between md:w-2/5 md:p-12 py-10">
          <FaHtml5
            size={50}
            color="#E34F26"
            className="transition-transform duration-300 hover:scale-110"
          />
          <FaCss3
            size={50}
            color="#1572b6"
            className="transition-transform duration-300 hover:scale-110"
          />
          <FaReact
            size={50}
            color="#61DAFB"
            className="transition-transform duration-300 hover:scale-110"
          />
          <FaJs
            size={50}
            color="#F7DF1E"
            className="transition-transform duration-300 hover:scale-110"
          />
          <SiMongodb
            size={50}
            color="#47A248"
            className="transition-transform duration-300 hover:scale-110"
          />
          <SiExpress
            size={50}
            color="#000000"
            className="transition-transform duration-300 hover:scale-110"
          />
          <SiMysql
            size={50}
            color="#4479A1"
            className="transition-transform duration-300 hover:scale-110"
          />
          <FaPython
            size={50}
            color="#3776AB"
            className="transition-transform duration-300 hover:scale-110"
          />
          <FaGit
            size={50}
            color="#F05032"
            className="transition-transform duration-300 hover:scale-110"
          />
          <FaGithub
            size={50}
            color="#181717"
            className="transition-transform duration-300 hover:scale-110"
          />
          <FaAws
            size={50}
            color="#FF9900"
            className="transition-transform duration-300 hover:scale-110"
          />
          <FaFigma
            size={50}
            color="#F24E1E"
            className="transition-transform duration-300 hover:scale-110"
          />
          <SiTailwindcss
            size={50}
            color="#06B6D4"
            className="transition-transform duration-300 hover:scale-110"
          />
          <FaNodeJs
            size={50}
            color="#3C873A"
            className="transition-transform duration-300 hover:scale-110"
          />
          <FaDatabase
            size={50}
            color="#47A248"
            className="transition-transform duration-300 hover:scale-110"
          />
          <SiBootstrap
            size={50}
            color="#7952B3"
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
      <div>  <h1 className="text-3xl md:text-5xl font-bold text-center text-white">Experience</h1></div>
<div className="bg-slate-950 bg-opacity-45 mt-8 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-start gap-6">
          <div className="bg-blue-500 p-3 rounded-full">
            <FaDesktop className="text-white" size={30} />
          </div>
          <div className="text-white flex-1">
            <h2 className="text-xl font-semibold mb-2">Nagarjuna College of Engineering and Technology</h2>
            <p className="text-sm text-gray-300 mb-3">April 2024 - June 2024</p>
            <ul className="space-y-2">
              {[
                "Worked as Full Stack developer intern",
                "Built a responsive website for a client using HTML, CSS, Embedded JS, Express.js, Node.js, and MongoDB",
                "Used GitHub for version control and collaboration",
                "Used Figma for designing the website"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Experience;
