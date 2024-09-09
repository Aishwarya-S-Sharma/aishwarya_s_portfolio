import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub ,FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id='footer' className='flex justify-between items-center bg-[#0c0e19] p-6'>
      <div className='text-white'>
        <p>Contact & feel free to reach out!</p>
      </div>
      <div className='flex gap-6'>
        <a href="mailto:aishwarya.s683@gmail.com" aria-label="Email">
          <MdOutlineEmail size={24} className="text-white hover:text-[#465697]" />
        </a>
        <a href="https://www.linkedin.com/in/aishwarya-s-1c683" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <CiLinkedin size={24} className="text-white hover:text-[#465697]" />
        </a>
        <a href="https://github.com/Aishwarya-S-Sharma" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={24} className="text-white hover:text-[#465697]" />
        </a>
        <a href="https://x.com/Aishusharma683" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter size={24} className="text-white hover:text-[#465697]" />
        </a>
      </div>
    </footer>
  )
}

export default Footer