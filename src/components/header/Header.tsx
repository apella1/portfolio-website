import Navbar from "../navbar/Navbar";

export default function Header() {
  return (
    <header className="h-screen px-4 py-4" id="home">
      <Navbar />
      <div className="py-20 pl-20 space-y-4">
        <p className="font-bold text-green-600">Hello, I'm</p>
        <h1 className="text-6xl font-bold">John Apella</h1>
        <h2 className="text-3xl font-bold">Frontend Developer</h2>
        <p className="p-2">I design and implement frontend solutions</p>
        <a
          href="#projects"
          className="p-2 my-3 text-white bg-green-500 rounded-lg"
        >
          Check out my projects.
        </a>
      </div>
    </header>
  );
}
