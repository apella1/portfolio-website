const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between px-4 py-4">
      <p className="text-lg font-bold">John Apella</p>
      <div className="flex items-center justify-around space-x-6">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">My Projects</a>
        <a href="#contact">Contact</a>
        <a href="hire">Hire Me</a>
      </div>
    </nav>
  );
};

export default Navbar;
