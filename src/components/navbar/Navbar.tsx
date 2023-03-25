import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const Menu = () => (
    <>
      <a href="#home" className="hover:bg-[#343A46] py-2 px-3 rounded-2xl">
        Home
      </a>
      <a href="#about" className="hover:bg-[#343A46] py-2 px-3 rounded-2xl">
        About
      </a>
      <a href="#skills" className="hover:bg-[#343A46] py-2 px-3 rounded-2xl">
        Skills
      </a>
      <a href="#projects" className="hover:bg-[#343A46] py-2 px-3 rounded-2xl">
        My Projects
      </a>
      <a href="#contact" className="hover:bg-[#343A46] py-2 px-3 rounded-2xl">
        Contact
      </a>
      <a href="mailto:apellajohn@gmail.com" className="p-3 bg-green-600 hover:bg-green-500 rounded-lg">
        Hire Me
      </a>
    </>
  );
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav
      className={`container flex items-center justify-between w-full px-4 py-4`}
    >
      <p className="text-2xl font-black">JA</p>
      {/* menu */}
      <div className="hidden md:flex md:items-center md:justify-center md:space-x-4">
        <Menu />
      </div>
      {/* mobile menu icons */}
      <div className="z-10 inline-block md:hidden">
        {isNavOpen ? (
          <RiCloseLine color="white" size={30} onClick={toggleNavbar} />
        ) : (
          <RiMenuLine color="white" size={30} onClick={toggleNavbar} />
        )}
      </div>
      {/* mobile menu */}
      <div
        className={
          !isNavOpen
            ? "hidden"
            : "flex absolute inset-0 w-full h-screen z-{1} flex-col items-center justify-center  bg-[#23272F] space-y-2"
        }
      >
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
