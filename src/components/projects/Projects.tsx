import FeaturedProject from "./FeaturedProject";
import Project from "./Project";
import { featuredProjects, otherProjects } from "./ProjectsList";

export default function Projects() {
  return (
    <section className="flex flex-col p-4 m-4 space-y-2" id="projects">
      <h2 className="self-center text-4xl font-medium text-green-600">
        My Projects
      </h2>
      <hr className="bg-green-600 w-40 h-1.5 self-center mb-6 mt-0" />
      <h3 className="self-center p-4 text-3xl font-medium text-green-600">
        Featured Projects
      </h3>
      <div>
        {featuredProjects.map((item, id) => (
          <FeaturedProject featuredProject={item} key={id} />
        ))}
      </div>
      <div className="flex flex-col p-4 mt-2">
        <h3 className="self-center p-4 pb-1 text-3xl font-bold text-green-600">
          Other Projects
        </h3>
        <hr className="bg-green-600 w-40 h-1.5 self-center mb-6 mt-0" />
        <div className="grid grid-flow-row grid-rows-2 gap-4 grid-cols-1 lg:grid-cols-3">
          {otherProjects.map((project, id) => (
            <Project project={project} key={id} />
          ))}
        </div>
      </div>
    </section>
  );
}
