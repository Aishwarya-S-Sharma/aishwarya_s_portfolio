import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
    const [menu,openMenu] = useState(false);
    const [showMenu,setShowMenu] = useState(true);
  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>
      <ul className={`${menu? "block" : "hidden"} mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
        <a href="#about"><li className="text-md transition-all duration-300 p-1 ms:p-0">About</li></a>
        <a href="#Experience"><li className="text-md transition-all duration-300 p-1 ms:p-0">Experience</li></a>
        <a href="#Projects"><li className="text-md transition-all duration-300 p-1 ms:p-0">Projects</li></a>
        <a href="#CodingProfiles"><li className="text-md transition-all duration-300 p-1 ms:p-0">Coding Profiles</li></a>
        <a href="#footer"><li className="text-md transition-all duration-300 p-1 ms:p-0">Contact</li></a>
      </ul>
      {showMenu?(
        <RiMenu2Line size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer" onClick={()=>{
            setShowMenu(!showMenu);
            openMenu(!menu);
        }}/>
      ):(
        <RiCloseLine size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer" onClick={()=>{
            setShowMenu(!showMenu);
            openMenu(!menu);
        }}/>
      )}
    </nav>
  );
};

export default Navbar;
