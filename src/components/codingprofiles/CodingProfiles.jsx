import React from 'react'
import { FaHackerrank, FaGithub } from 'react-icons/fa'
import { SiLeetcode, SiGeeksforgeeks, SiCodingninjas, SiCodechef, SiCodeforces } from 'react-icons/si'

const ProfileLink = ({ icon, name, link }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center p-4 bg-[#0c0e19] rounded-lg shadow-md hover:bg-[#161b2e] transition-all duration-300"
  >
    {icon}
    <div className="ml-4">
      <h3 className="text-lg font-semibold">{name}</h3>
    </div>
  </a>
)

const CodingProfiles = () => {
  return (
    <div id="CodingProfiles" className="p-10 md:p-24 text-white bg-black bg-opacity-30">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Coding Profiles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProfileLink 
          icon={<FaHackerrank className="text-4xl text-[#465697]" />}
          name="HackerRank"
          link="https://www.hackerrank.com/profile/aishwarya_s683"
        />
        <ProfileLink 
          icon={<SiLeetcode className="text-4xl text-[#465697]" />}
          name="LeetCode"
          link="https://leetcode.com/u/aishwarya_s683/"
        />
        <ProfileLink 
          icon={<FaGithub className="text-4xl text-[#465697]" />}
          name="GitHub"
          link="https://github.com/Aishwarya-S-Sharma"
        />
        <ProfileLink 
          icon={<SiGeeksforgeeks className="text-4xl text-[#465697]" />}
          name="GeeksforGeeks"
          link="https://www.geeksforgeeks.org/user/aishwarh52z/"
        />
        <ProfileLink 
          icon={<SiCodingninjas className="text-4xl text-[#465697]" />}
          name="CodingNinjas"
          link="https://www.naukri.com/code360/profile/aishwarya_s683"
        />
        <ProfileLink 
          icon={<SiCodechef className="text-4xl text-[#465697]" />}
          name="CodeChef"
          link="https://www.codechef.com/users/aishwaryas683"
        />
        
      </div>
    </div>
  )
}

export default CodingProfiles