import { Typewriter } from "react-simple-typewriter";
import Navbar from "../navbar/Navbar";
export default function Header() {
  return (
    <header
      className="h-screen px-4 py-4 text-white bg-gradient-to-r from-[#1e130c] to-[#9a8478]"
      id="home"
    >
      <Navbar />
      <div className="w-full py-24 pl-6 md:pl-20 space-y-4">
        <p className="font-bold text-green-600">Hello, I'm</p>
        <h1 className="text-4xl font-bold md:text-6xl">John Apella</h1>
        <h2 className="text-2xl font-semibold md:text-4xl">
          <Typewriter
            words={["Frontend Developer"]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <p className="p-2 mb-3">I design and implement frontend solutions</p>
        <p className="mx-2">
          <a
            href="#projects"
            className="p-4 mt-6 text-white bg-green-500 rounded-md hover:bg-green-900"
          >
            Check out my projects.
          </a>
        </p>
      </div>
    </header>
  );
}
