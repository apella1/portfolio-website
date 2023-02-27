import Project from "./Project";
import { featuredProjects } from "./ProjectsList";

export default function Projects() {
  return (
    <section className="flex flex-col p-4 m-4 space-y-2" id="projects">
      <h2 className="self-center text-4xl font-medium text-green-600">
        Projects
      </h2>
      <hr className="bg-green-600 w-40 h-1.5 self-center mb-6 mt-0" />
      <div className="p-4 md:grid md:grid-cols-2 md:gap-6">
        {featuredProjects.map((item, id) => (
          <Project project={item} key={id} />
        ))}
      </div>
    </section>
  );
}
