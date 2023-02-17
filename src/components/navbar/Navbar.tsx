const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between w-full px-4 py-4">
      <p className="text-lg font-bold">John Apella</p>
		<div className="relative flex items-center justify-around space-x-6">
		<a href="#home" className="hover:underline">Home</a>
        <a href="#about"className="hover:underline">About</a>
        <a href="#skills"className="hover:underline">Skills</a>
        <a href="#projects"className="hover:underline">My Projects</a>
        <a href="#contact"className="hover:underline">Contact</a>
		<a href="mailto:apellajohn@gmail.com" className="p-3 bg-green-600">Hire Me</a>
		<span className="absolute bottom-0 left-0 h-0.5 bg-green-600 transition-all ease-in-out duration-500 w-0"></span>
      </div>
    </nav>
  );
};

export default Navbar;
