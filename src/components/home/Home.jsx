import React from "react";
import a_img from "../../assets/Aishwarya_S_2025.jpg";
import TextChange from "../TextChange";
const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange/>
        </h1>
        <p className="text-sm md:text-lg lg:text-xl xl:text-2xl tracking-wide leading-relaxed mt-4 mb-6 text-gray-300">
          I am a Full-stack Enthusiast and a passionate learner. Committed to continuous learning and dedicated to delivering high-quality work. Eager to advance my skills and pursue a successful career in software engineering, contributing to innovative and impactful projects.
        </p>
       
        <a 
          href="https://drive.google.com/file/d/1izLo7HRR0pTd7xypPgb8dNOdN-yvE0hR/view?usp=drive_link" 
          target="_blank" 
          rel="noopener noreferrer" className="inline-block mt-6 px-8 py-3 text-lg font-semibold text-white bg-[#465697] hover:bg-[#3a477d] transition-colors duration-300 rounded-md shadow-lg border border-[#5b6cad]"
        >
        Resume
        </a>
      </div>
      <div className="md:w-2/4">
        <img className="w-3/5 rounded-full" src={a_img} alt="image" />
      </div>
    </div>
  );
};

export default Home;
