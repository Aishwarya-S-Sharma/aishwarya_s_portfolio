import React from 'react'
import { FaPlay, FaCode } from 'react-icons/fa';

const ProjectCard = ({ title, main, image, demoLink, sourceLink }) => {
  return (
    <div className='p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-slate-900 rounded-xl'>
      <img className="p-4 h-48 object-cover w-full" src={image} alt={title} />
      <h3 className='px-4 md:text-2xl text-xl font-bold leading-tight'>{title}</h3>
   
      <p className='px-4 text-sm md:text-md leading-tight py-2'>{main}</p>
      <div className='mt-2 p-2 md:p-4 flex justify-center gap-4'>
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className='flex items-center justify-center w-12 h-12 text-white bg-[#465697] hover:bg-[#3a477d] transition-colors duration-300 rounded-full shadow-lg'>
            <FaPlay className="text-xl" />
          </a>
        )}
        {sourceLink && (
          <a href={sourceLink} target="_blank" rel="noopener noreferrer" className='flex items-center justify-center w-12 h-12 text-white bg-[#465697] hover:bg-[#3a477d] transition-colors duration-300 rounded-full shadow-lg'>
            <FaCode className="text-xl" />
          </a>
        )}
      </div>
    </div>
  )
}


export default ProjectCard