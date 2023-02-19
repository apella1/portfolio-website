interface ProjectCard {
  title: string;
  description: string;
  stack: string[];
  site: string;
  repo: string;
  webDeployed: boolean;
  image?: string;
}

export default function Project({ project }: { project: ProjectCard }) {
  const { title, description, stack, site, repo, webDeployed, image } = project;
  return (
    <div>
      {image ? <p className="small-text">Display coming soon</p> : null}
      <h3 className="inline-block text-xl font-bold">{title}</h3>
      <p className="">{description}</p>
      <div className="flex mt-auto">
        <ul className="flex flex-wrap list-none list-inside">
          {stack.map((item, id) => (
            <li
              key={id}
              className="flex items-center mr-3 opacity-50 text-brand"
            >
              <span className="small-text">{item.toUpperCase()}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-start my-3 space-x-4">
        <a
          href={site}
          className="p-2 bg-green-600 rounded-md hover:bg-green-900"
        >
          Demo
        </a>
        <a
          href={repo}
          className="p-2 bg-green-600 rounded-md hover:bg-green-900"
        >
          GitHub
        </a>
      </div>
      {!webDeployed ? (
        <p className="my-4 small-text">Development Almost Done</p>
      ) : null}
    </div>
  );
}
