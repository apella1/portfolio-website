type FeaturedPr = {
  title: string;
  description: string;
  image?: string;
  stack: string[];
  site: string;
  repo: string;
};

export default function FeaturedProject({
  featuredProject,
}: {
  featuredProject: FeaturedPr;
}) {
  const { title, description, image, stack, site, repo } = featuredProject;
  return (
    <article>
      <h3 className="inline-block text-xl font-bold">{title}</h3>
      <div className="w-full my-auto overflow-hidden">
        {image ? (
          <img src={image} alt={`${title.toLowerCase()}`} />
        ) : null
        }
      </div>
      <div className="">
        <p>{description}</p>
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
    </article>
  );
}
