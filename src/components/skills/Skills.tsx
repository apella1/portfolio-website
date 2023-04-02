import {
  SiCss3,
  SiDjango,
  SiExpress,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNeovim,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPug,
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
          <h2 className="my-4 font-bold md:text-xl">Languages and Databases</h2>
          <div className="flex flex-wrap items-center justify-start space-x-4">
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiHtml5 />
              </p>{" "}
              <h3 className="self-center">HTML</h3>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiCss3 />
              </p>{" "}
              <h3 className="self-center">CSS</h3>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiJavascript />
              </p>{" "}
              <h3 className="self-center">JavaScript</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiTypescript />
              </p>{" "}
              <h3 className="self-center">TypeScript</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiPython />
              </p>{" "}
              <h3 className="self-center">Python</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiMongodb />
              </p>{" "}
              <h3 className="self-center">MongoDB</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiPostgresql />
              </p>{" "}
              <h3 className="self-center">PostgreSQL</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="my-4 font-bold md:text-xl">
            Frameworks and Libraries
          </h2>
          <div className="flex flex-wrap items-center justify-start space-x-4">
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiTailwindcss />
              </p>{" "}
              <h3 className="self-center">TailWindCSS</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiReact />
              </p>{" "}
              <h3 className="self-center">React</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiNextdotjs />
              </p>{" "}
              <h3 className="self-center">Next</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiDjango />
              </p>{" "}
              <h3 className="self-center">Django</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiExpress />
              </p>{" "}
              <h3 className="self-center">Express</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="my-4 font-bold md:text-xl">Other Tools</h2>
          <div className="flex flex-wrap items-center justify-start space-x-4">
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiGit />
              </p>{" "}
              <h3 className="self-center">Git</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiGithub />
              </p>{" "}
              <h3 className="self-center">GitHub</h3>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiLinux />
              </p>{" "}
              <h3 className="self-center">Linux</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiVisualstudiocode />
              </p>{" "}
              <h3 className="self-center">VS Code</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiPycharm />
              </p>{" "}
              <h3 className="self-center">Pycharm</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiNeovim />
              </p>{" "}
              <h3 className="self-center">Neovim</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiGraphql />
              </p>{" "}
              <h3 className="self-center">GraphQL</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiPug />
              </p>{" "}
              <h3 className="self-center">Pug</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-6xl">
                <SiNodedotjs />
              </p>{" "}
              <h3 className="self-center">Node</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
