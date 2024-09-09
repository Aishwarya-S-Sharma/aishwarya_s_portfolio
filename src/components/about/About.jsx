import React from "react";
import { IoArrowForward } from "react-icons/io5";
import about_img from "../../assets/about.png";
const About = () => {
  return (
    <div id='about'className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About Me</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={about_img} alt="" />
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal tracking-tight">
                  Full Stack Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Full-Stack Enthusiast with expertise in building scalable and responsive web applications. Proficient in MERN stack and constantly learning new technologies.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal tracking-tight">
                  Problem Solver
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Passionate about problem solving, ultimately driving
                technological advancements and committed to delivering high quality impactful solutions.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal tracking-tight">
                  Final Year Student
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I am a final year student at Nagarjuna College of Engineering and Technology, pursuing a Bachelor's degree in CSE-Data Science.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
