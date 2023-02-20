import {
  SiDjango,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNeovim,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPycharm,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";

export default function Skills() {
  return (
    <section className="flex flex-col p-10 m-4 space-y-2" id="skills">
      <h2 className="flex items-center justify-center text-4xl font-medium text-green-600">
        Skills
      </h2>
      <hr className="bg-green-600 w-20 h-1.5 self-center mb-6 mt-0" />
      <div className="p-4 mt-2 md:grid md:grid-cols-3 md:gap-4 space-x-2">
        <div className="flex flex-col">
          <h2 className="mb-2 font-bold md:text-xl">Languages and Databases</h2>
          <div className="flex flex-wrap items-center justify-start space-x-4">
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiJavascript />
              </p>{" "}
              <h3>JavaScript</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiTypescript />
              </p>{" "}
              <h3>TypeScript</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiNodedotjs />
              </p>{" "}
              <h3>Node</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiPython />
              </p>{" "}
              <h3>Python</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiMongodb />
              </p>{" "}
              <h3>MongoDB</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiPostgresql />
              </p>{" "}
              <h3>PostgreSQL</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="mb-2 font-bold md:text-xl">
            Frameworks and Libraries
          </h2>
          <div className="flex flex-wrap items-center justify-start space-x-4">
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiTailwindcss />
              </p>{" "}
              <h3>TailWindCSS</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiReact />
              </p>{" "}
              <h3>React</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiNextdotjs />
              </p>{" "}
              <h3>Next</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiDjango />
              </p>{" "}
              <h3>Django</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiExpress />
              </p>{" "}
              <h3>Express</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="mb-2 font-bold md:text-xl">Other Tools</h2>
          <div className="flex flex-wrap items-center justify-start space-x-4">
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiGit />
              </p>{" "}
              <h3>Git</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiGithub />
              </p>{" "}
              <h3>GitHub</h3>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiLinux />
              </p>{" "}
              <h3>Linux</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiVisualstudiocode />
              </p>{" "}
              <h3>VS Code</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiPycharm />
              </p>{" "}
              <h3>Pycharm IDE</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiNeovim />
              </p>{" "}
              <h3>Neovim</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
