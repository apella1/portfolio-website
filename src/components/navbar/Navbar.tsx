import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const Menu = () => (
    <>
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
            : "flex absolute inset-0 w-full h-screen z-{1} flex-col items-center justify-center  bg-[#1e130c] space-y-2"
        }
      >
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
