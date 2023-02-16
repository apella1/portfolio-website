import FeaturedProject from "./FeaturedProject";
import Project from "./Project";

const otherProjects = [
  {
    title: "Todo App",
    description:
      "This is an application that tracks the tasks that a user has set to do for a certain period of time.",
    stack: ["Html", "React", "TailwindCSS"],
    site: "https://sitetoapp.vercel.ap",
    repo: "https://github.com/apella1/todo-app",
    webDeployed: true,
  },
];

const featuredProjects = [
  {
    title: "MockGPT",
    description: "A mock GPT3 website showing the capabilities of AGI",
    stack: ["Html", "React", "TailwindCSS"],
    site: "https://sitetoapp.vercel.ap",
    repo: "https://github.com/apella1/todo-app",
  },
];

export default function Projects() {
  return (
    <section className="p-4 m-4 space-y-2" id="projects">
      <h2 className="text-4xl font-medium text-green-600">My Projects</h2>
      <div>
        {featuredProjects.map((item, id) => (
          <FeaturedProject featuredProject={item} key={id} />
        ))}
      </div>
      <div>
        <h3>Other Projects</h3>
        <div>
          {otherProjects.map((project, id) => (
            <Project project={project} key={id} />
          ))}
        </div>
      </div>
    </section>
  );
}
