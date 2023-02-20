import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav
      className={`container flex items-center justify-between w-full px-4 py-4`}
    >
      <p className="text-lg font-bold">John Apella</p>
      <div className="md:hidden">
        {isNavOpen ? (
          <RiCloseLine color="white" size={30} onClick={toggleNavbar} />
        ) : (
          <RiMenuLine color="white" size={30} onClick={toggleNavbar} />
        )}
        {isNavOpen && (
          <div className="fixed flex flex-col items-start justify-start w-full bg-gray-700 space-y-4">
            <a href="#home" className="hover:underline">
              Home
            </a>
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
            <a href="#projects" className="hover:underline">
              My Projects
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
            <a href="mailto:apellajohn@gmail.com" className="p-3 bg-green-600">
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
