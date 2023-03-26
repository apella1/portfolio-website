interface ProjectCard {
  title: string;
  description: string;
  stack: string[];
  site: string;
  repo: string;
  image: string;
}

export default function Project({ project }: { project: ProjectCard }) {
  const { title, description, stack, site, repo, image } = project;
  return (
    <div className="flex flex-col p-4">
      <h3 className="self-center text-white inline-block px-4 py-2 text-xl font-bold">
        {title}
      </h3>
      <img src={image} alt={title.toLowerCase()} className="text-white" />
      <p className="text-white">{description}</p>
      <div className="flex self-center mt-auto">
        <ul className="flex flex-wrap list-none list-inside">
          {stack.map((item, id) => (
            <li
              key={id}
              className="flex items-center mr-3 opacity-50 text-brand"
            >
              <span className="small-text text-white">{item.toUpperCase()}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center self-center justify-start my-3 text-white space-x-4">
        <a
          href={site}
          className="p-2 bg-green-600 rounded-md hover:bg-green-900"
          target="_blank"
          rel="noreferrer noopener"
        >
          Demo
        </a>
        <a
          href={repo}
          className="p-2 bg-green-600 rounded-md hover:bg-green-900"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
