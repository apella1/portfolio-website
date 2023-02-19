import {useState} from "react";
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
	const [toggleNavbar, setToggleNavbar] = useState<boolean>(false)
  return (
	  <nav className={`container flex items-center justify-between w-full px-4 py-4`}>
      <p className="text-lg font-bold">John Apella</p>
		  <div className={toggleNavbar ? `relative flex items-center justify-around space-x-6` : `hidden`}>
		<a href="#home" className="hover:underline">Home</a>
        <a href="#about"className="hover:underline">About</a>
        <a href="#skills"className="hover:underline">Skills</a>
        <a href="#projects"className="hover:underline">My Projects</a>
        <a href="#contact"className="hover:underline">Contact</a>
		<a href="mailto:apellajohn@gmail.com" className="p-3 bg-green-600">Hire Me</a>
      </div>
		  <button  onClick={() => setToggleNavbar(!toggleNavbar)} className={toggleNavbar ? `text-3xl` : `hidden`}><AiOutlineMenu /></button>
    </nav>
  );
};

export default Navbar;
